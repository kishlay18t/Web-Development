import { getFilePath } from "../filesystem/filesystem.js";
import { getCurrentDirectory } from "../storage/storage.js";

function pwd(){
    return getFilePath(getCurrentDirectory());
}

export { pwd };