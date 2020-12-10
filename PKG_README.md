# 使用 pkg 打包流程说明

---

1. 安装 pkg 工具， 执行 `npm install -g pkg`， github 地址为`https://github.com/vercel/pkg`，有详细使用说明
2. 安装好 pkg 之后，在当前目录安装项目依赖包，执行 `yarn --prod`
3. 依赖包安装好之后，开始打包，执行`yarn pkg`，具体脚本可在 **package.json** 的 **scripts** 中查看即`pkg . --options max_old_space_size=2048 --out-path=../../pkg/dist/`
4. **package.json** pkg 所依赖属性为：

```json
"bin": "./server.js",
    "pkg": {
        "scripts": [],
        "assets": [
            "node_modules/@steedos/schemas/object/schema.json",
            "node_modules/@steedos/standard-objects/**",
            "node_modules/@steedos/webapp/build/**",
            "node_modules/@steedos/i18n/**",
            "node_modules/@steedos/app-crm/**",
            "node_modules/@steedos/steedos-plugin-workflow/**"
        ],
        "targets": [
            "node12-win-x64"
        ]
    }
```

5. 进入打包生成的执行程序目录，即 `--out-path=../../pkg/dist/`目录，将**steedos-project-oa.exe** 改名为**2-启动华炎魔方.exe**后，目录结构应为：

- `bin` 存放系统依赖的执行程序，包含 mongodb；
- `db` 存放数据库数据；
- `node_modules` 存放系统运行所需二进制包；
- `storage` 存放系统中上传的文件；
- `.env` 是系统的配置文件可在此文件中配置端口、访问地址等；
- `1-启动数据库.bat` 用于启动数据库服务；
- `2-启动华炎魔方.exe` 用于启动华炎魔方服务；
- `steedos-config.yml` 配合.env 文件使用的配置文件；
- `安装说明.docx` 系统安装及启动流程说明；
- `使用说明.docx` 系统使用说明。

6. dist 文件夹用于测试，同层级新建文件夹 steedos-project-oa-win 与 dist 具有同样的目录结构用于打包成 steedos-project-oa-win.zip 压缩包，并上传至阿里云/server-backups/steedos-trial 下，上传之后设置 steedos-project-oa-win.zip 权限为只读
