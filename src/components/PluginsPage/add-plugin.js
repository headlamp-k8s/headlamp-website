// How to use:
// - Be sure that the URL you provide is from the artifacthub-pkg.yml file in the plugin repo (NOT the raw file URL)
// - Run the script with: npm run add-plugin <plugin-repo-url>
// Example: npm run add-plugin https://github.com/your/repo/blob/main/artifacthub-pkg.yml

// NOTE: Please note that you may need to refresh the directory or the browser page when files are updated
// as it is sometimes delayed in showing the new files.

const fs = require("fs/promises");
const path = require("path");
const yaml = require("js-yaml");



// converts a GitHub URL of the artifacthub-pkg.yml file to the raw.githubusercontent.com URL
function toRawGithubUrl(input) {
    if (input.includes("raw.githubusercontent.com")) {
        return input;
    }
    if (input.includes("github.com") && input.includes("/blob/")) {
        const [before, after] = input.split("/blob/");
        const rawBase = before.replace("https://github.com", "https://raw.githubusercontent.com");
        return `${rawBase}/${after}`;
    }

    return input;

}

// ensure directory exists
async function ensurePluginDataDir() {
    const pluginDataDir = path.join(process.cwd(), "src", "components", "PluginsPage", "PluginData");

    try {
        const stat = await fs.stat(pluginDataDir);
        if (!stat.isDirectory()) {
            throw new Error(`${pluginDataDir} exists but is not a directory`);
        }
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log(`Creating directory: ${pluginDataDir}`);
            // Directory does not exist, create it
            await fs.mkdir(pluginDataDir, { recursive: true });
        }
    }

    return pluginDataDir;
}


async function updatePlugins() {
    const pluginDataDir = path.join(process.cwd(), "src", "components", "PluginsPage", "PluginData")

    const files = await fs.readdir(pluginDataDir);

    if (!files.includes("index.js")) {
        // add index.js file if it doesn't exist
        console.log("Creating index.js file in PluginData dir");
        await fs.writeFile(path.join(pluginDataDir, "index.js"), "", "utf8");
    }

    const fileNames = []
    for (const fileName of files) {
        if (fileName.endsWith(".js") && fileName !== "index.js") {
            fileNames.push(fileName.slice(0, fileName.length - 3))
        }
    }

    let indexFileContent = "";

    for (const name of fileNames) {
        indexFileContent += `import ${name} from './${name}.js';\n`;
    }

    indexFileContent += "\n\nconst allPluginsData = [\n";

    for (const name of fileNames) {
        indexFileContent += `    ${name},\n`;
    }

    indexFileContent += "]; \n\nexport default allPluginsData;\n";

    await fs.writeFile(path.join(pluginDataDir, "index.js"), indexFileContent, "utf8");

}

async function main() {

    // we get the URL from command line arguments
    const inputUrl = process.argv[2];

    if (!inputUrl) {
        console.log("Usage: npm run add-plugin <plugin-repo-url>");
        process.exit(1);
    }

    // extract github url and author
    const fileNameSlash = inputUrl.lastIndexOf("/");
    if (fileNameSlash === -1) {
        console.error("Invalid URL format");
        process.exit(1);
    }

    const githubURL = inputUrl.substring(0, fileNameSlash);
    const url = new URL(inputUrl);

    const rawUrl = toRawGithubUrl(inputUrl);

    const response = await (fetch(rawUrl))

    if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${rawUrl}, status: ${response.status}`);
    }

    const text = await response.text();

    const data = yaml.load(text);

    // we validate the data
    if (!data || typeof data !== "object") {
        console.error("Invalid or empty plugin data");
        process.exit(1);
    }

    // grab the name for the file
    const fileName = data.name
        ? data.name.trim().toLowerCase().replace(/[-\s]+/g, "_").replace(/[^a-z0-9_]/g, "")
        : null;


    const pluginDataDir = await ensurePluginDataDir();

    // name the new file
    const filePath = path.join(pluginDataDir, `${fileName}.js`);

    const pluginInfo = { ...data, githubURL };


    const fileContent = `// created via add-plugin.js
    const ${fileName} = ${JSON.stringify(pluginInfo, null, 4)};

    export default ${fileName};
    `;

    await fs.writeFile(filePath, fileContent, "utf8");

    console.log(`Plugin data saved to ${filePath}`);

    await updatePlugins();

}

main().catch((error) => {
    console.error("add-plugin error:", error?.message || error);
    process.exit(1);
});