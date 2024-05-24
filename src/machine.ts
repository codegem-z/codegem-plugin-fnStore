import path from "path";
import fse from "fs-extra";

type MetaList = {
  filename: string;
  directory: string;
  code: string;
  version: string;
  description: string;
}[];

export default function createFn([metaList]: MetaList[]): any[] {
  // console.log(metaList);
  const root = path.join(process.cwd(), "src/fnStore");
  fse.ensureDirSync(root);

  return metaList.map((item) => {
    return {
      pathname: path.join(root, item.directory, item.filename),
      code: item.code,
    };
  });
}
