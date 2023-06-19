import gettingStartedIndex from "../../md/gettingStarted/index.mdx";
import introduction from "../../md/gettingStarted/introduction.mdx";
import installation from "../../md/gettingStarted/installation.mdx";
import createProject from "../../md/gettingStarted/createProject.mdx";

import basicsIndex from "../../md/basics/index.mdx";
import importMaps from "../../md/basics/importMaps.mdx";
import packit from "../../md/basics/packit.mdx";
import server from "../../md/basics/server.mdx";
import struct from "../../md/basics/struct.mdx";

import cmdsIndex from "../../md/commands/index.mdx";
import cmdsInit from "../../md/commands/init.mdx";
import cmdsAdd from "../../md/commands/add.mdx";
import cmdsPackit from "../../md/commands/packit.mdx";

export default {
  "getting started": {
    "": gettingStartedIndex,
    "introduction": introduction,
    "installation": installation,
    "create project": createProject
  },
  "basics":{
    "": basicsIndex,
    "project structure": struct,
    "import maps": importMaps,
    "packit": packit,
    "server": server
  },
  "commands": {
    "": cmdsIndex,
    "init": cmdsInit,
    "add": cmdsAdd,
    "packit": cmdsPackit
  }
}