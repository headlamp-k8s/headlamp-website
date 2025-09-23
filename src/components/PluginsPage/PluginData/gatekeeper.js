// created via add-plugin.js
    const gatekeeper = {
    "version": "0.1.1",
    "name": "gatekeeper",
    "displayName": "Gatekeeper",
    "createdAt": "2025-06-09T22:53:04Z",
    "description": "Headlamp plugin for Gatekeeper",
    "logoURL": "https://www.openpolicyagent.org/img/nav/logo.png",
    "screenshots": [
        {
            "title": "violations",
            "url": "https://raw.githubusercontent.com/sozercan/gatekeeper-headlamp-plugin/refs/heads/master/images/violations.png"
        },
        {
            "title": "constraints",
            "url": "https://raw.githubusercontent.com/sozercan/gatekeeper-headlamp-plugin/refs/heads/master/images/constraints.png"
        },
        {
            "title": "constraint-templates",
            "url": "https://raw.githubusercontent.com/sozercan/gatekeeper-headlamp-plugin/refs/heads/master/images/constraint_template.png"
        },
        {
            "title": "library",
            "url": "https://raw.githubusercontent.com/sozercan/gatekeeper-headlamp-plugin/refs/heads/master/images/library.png"
        }
    ],
    "readme": "# Gatekeeper Headlamp Plugin\n\nThis plugin integrates Gatekeeper with Headlamp, providing a UI for managing\nConstraintTemplates, Constraints, and viewing violations.\n\n## Features\n\n- List and view ConstraintTemplates\n- List and view Constraints\n- View Gatekeeper audit violations\n- Apply policies from Gatekeeper library",
    "install": "Desktop Headlamp\n- Install Headlamp (https://headlamp.dev/docs/latest/installation/desktop/)\n- Open Plugin Catalog\n- Select the Gatekeeper plugin and click the install button\n- After install you may need to restart Headlamp\n",
    "keywords": [
        "gatekeeper",
        "headlamp",
        "plugin",
        "opa",
        "policy"
    ],
    "links": [
        {
            "name": "source",
            "url": "https://github.com/sozercan/gatekeeper-headlamp-plugin"
        },
        {
            "name": "Gatekeeper",
            "url": "https://open-policy-agent.github.io/gatekeeper/"
        }
    ],
    "annotations": {
        "headlamp/plugin/archive-url": "https://github.com/sozercan/gatekeeper-headlamp-plugin/releases/download/0.1.1/gatekeeper-headlamp-plugin-0.1.1.tar.gz",
        "headlamp/plugin/archive-checksum": "SHA256:b80403481b491fe1d10eec81a1f182adcfc12dff255b512844c0bf63d9bff998",
        "headlamp/plugin/version-compat": ">=0.29",
        "headlamp/plugin/distro-compat": "in-cluster,web,docker-desktop,desktop"
    },
    "githubURL": "https://github.com/sozercan/gatekeeper-headlamp-plugin/blob/master"
};

    export default gatekeeper;
    