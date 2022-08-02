# 03-项目接口

#  黑马面面-接口文档
### baseURL: 'http://hmmm-api.itheima.net'

### 项目仓库地址：  https://gitee.com/zhoushugang/hmmm-frontend-dev 

### 01-框架

#### 1.1用户修改密码

> 基本信息


- 
**Path：** /frame/password

- 
**Method：** POST

- 
**接口描述：**oldPassword，newPassword 上传 MD5 码


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| ---- | ---- | -------- | ------ | ---- | -------- |
|  oldPassword | string | 必须 |  | 旧密码 |  |
|  newPassword | string | 必须 |  | 新密码 |  |


> 返回数据


```javascript
{}
```

#### 1.2用户注册

> 基本信息


- 
**Path：** /frame/register

- 
**Method：** POST

- 
**接口描述：**password 上传 MD5 码


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  username | string | 必须 |  | 账号 |  |
|  password | string | 必须 |  | 密码 |  |


> 返回数据


```json
{}
```

#### 1.3用户注销

> 基本信息


- 
**Path：** /frame/logout

- 
**Method：** POST

- 
**接口描述：** 用于用户注销，需要token认证


> 请求参数


> 返回数据


```javascript
{}
```

#### 1.4用户登录

[ ]()

> 基本信息


- 
**Path：** /frame/login

- 
**Method：** POST

- 
**接口描述：** password 上传 MD5 码 SHA256


> 请求参数


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  token | string | 必须 |  | 令牌 | 枚举: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjI
  sImlhdCI6MTUzNTY4NjY0NSwiZXhwIjoxNTM2ODk2MjQ1fQ.bGV4qjcZcNYDBJj
  ihIsSbSEQyPa5SkVcUYuA0WfgDds |


#### 1.5用户资料

> 基本信息


- 
**Path：** /frame/profile

- 
**Method：** POST

- 
**接口描述：** menus 菜单权限，需要从根节点开始 完整节点列表。


> 请求参数


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  name | string | 必须 |  | 用户名 | format: cname |
|  group | string | 必须 |  | 部门 | 枚举: 传智播客－研究院－项目开发组－前端 |
|  signature | string | 必须 |  | 签名 | 枚举: 海纳百川，有容乃大 |
|  avatar | string | 必须 |  | 头像 | 枚举: https://gw.alipayobjects.com/zos/rmsportal/
  BiazfanxmamNRoxxVxka.png |
|  roles | object | 必须 |  | 权限 |  |
| ├─ menus | string [] | 必须 |  | 菜单 | 最小数量: 3 |
| 元素是否都不同| | true | | | 最大数量: 6 |
| item | string |
| ├─ points | string [] | 必须 |  | 权限点 | 最小数量: 3 |
| 元素是否都不同 | | | true | 最大数量: 5 |
| item | string |


### 02-用户管理

#### 2.1用户修改

> 基本信息


- 
**Path：** /users/:id

- 
**Method：** PUT

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 用户id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  account | string | 必须 |  | 账号 | format: ctitle |
|  fullName | string | 必须 |  | 姓名 | format: ctitle |
|  mobile | string | 必须 |  | 联系电话 | format: ctitle |
|  permission_group_id | string | 必须 |  | 权限组id | format: ctitle |
|  avatar | string | 必须 |  | 头像 | format: ctitle |
|  email | string | 必须 |  | 邮件 | format: ctitle |
|  disabled | boolean | 必须 |  | 是否屏蔽 |  |


> 返回数据


```javascript
{}
```

#### 2.2用户列表

> 基本信息


- 
**Path：** /users

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 是 | 1 | 当前页数 |
| pagesize | 是 | 10 | 页尺寸 |
| keyword | 是 |  | 关键字 |
| disabled | 否 |  | 是否屏蔽 1 屏蔽 0 开启 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ account | string | 必须 |  | 账号 | format: word |
| ├─ fullName | string | 必须 |  | 姓名 | format: cname |
| ├─ mobile | string | 必须 |  | 联系电话 | format: mobile |
| ├─ permission_group_id | string | 必须 |  | 权限组id | format: id |
| ├─ permission_group_title | string | 必须 |  | 权限组名称 | format: ctitle |
| ├─ avatar | string | 必须 |  | 头像 | format: url |
| ├─ email | string | 必须 |  | 邮件 | format: email |
| ├─ last_date | integer | 必须 |  | 最近登录时间 | 最大值: 1537169459
最小值: 1537165459 |
| ├─ create_date | integer | 必须 |  | 注册时间 | 最大值: 1537169459
最小值: 1537165459 |
| ├─ disabled | boolean | 必须 |  | 是否屏蔽 |  |


#### 2.3用户删除

> 基本信息


- 
**Path：** /users/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 用户id |


> 返回数据


```javascript
{}
```

#### 2.4用户屏蔽、启用

> 基本信息


- 
**Path：** /users/:id/disabled

- 
**Method：** PUT

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 用户id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  disabled | boolean | 必须 |  | 是否屏蔽 |  |


> 返回数据


```javascript
{}
```

#### 2.5用户添加

> 基本信息


- 
**Path：** /users

- 
**Method：** POST

- 
**接口描述：** 默认密码  123456


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  account | string | 必须 |  | 账号 | format: ctitle |
|  fullName | string | 必须 |  | 姓名 | format: ctitle |
|  mobile | string | 必须 |  | 联系电话 | format: ctitle |
|  permission_group_id | string | 必须 |  | 权限组id | format: ctitle |
|  avatar | string | 必须 |  | 头像 | format: ctitle |
|  email | string | 必须 |  | 邮件 | format: ctitle |
|  disabled | boolean | 必须 |  | 是否屏蔽 |  |


> 返回数据


```javascript
{}
```

#### 2.6用户简单列表

> 基本信息


- 
**Path：** /users/simple

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| keyword | 是 |  | 关键字 |
| disabled | 否 |  | 是否屏蔽 1 屏蔽 0 开启 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ fullName | string | 必须 |  | 姓名 | format: cname |


#### 2.7用户详情

> 基本信息


- 
**Path：** /users/:id

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 用户i |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  account | string | 必须 |  | 账号 | format: ctitle |
|  fullName | string | 必须 |  | 姓名 | format: ctitle |
|  mobile | string | 必须 |  | 联系电话 | format: ctitle |
|  permission_group_id | integer | 必须 |  | 权限组id |  |
|  permission_group_title | string | 必须 |  | 权限组 | format: ctitle |
|  avatar | string | 必须 |  | 头像 | format: ctitle |
|  email | string | 必须 |  | 邮件 | format: ctitle |
|  last_date | integer | 必须 |  | 最近登录时间 | 最大值: 1537169459
最小值: 1537165459 |
|  create_date | integer | 必须 |  | 注册时间 | 最大值: 1537169459
最小值: 1537165459 |
|  disabled | boolean | 必须 |  | 是否屏蔽 |  |


#### 2.8用户重置密码

> 基本信息


- 
**Path：** /users/:id/password

- 
**Method：** PUT

- 
**接口描述：** password 上传 MD5 码 SHA256


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 用户id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  password | string | 必须 |  | 密码 | format: ctitle |


> 返回数据


```javascript
{}
```

### 03-菜单管理

#### 3.1菜单修改

> 基本信息


- 
**Path：** /menus/:id

- 
**Method：** PUT

- 
**接口描述：** 菜单项不能挂在权限点上，权限点只能挂在菜单项上


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 项id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  isPoint | boolean | 必须 |  | 是否权限点 |  |
|  pid | integer | 必须 |  | 父 id |  |
|  code | string | 必须 |  | 菜单代码 全局唯一 |  |
|  title | string | 必须 |  | 菜单标题 |  |


> 返回数据


```javascript
{}
```

#### 3.2菜单列表

> 基本信息


- 
**Path：** /menus

- 
**Method：** GET

- 
**接口描述：** 权限点只能挂在菜单项上


> 请求参数


> 返回数据


```javascript
[
    {
        "id": 1101,
        "pid": 1001,
        "code": "base",
        "title": "数据管理",
        "childs": [                                         // 菜单项
            {
                "id": 1102,
                "pid": 1101,
                "code": "base-users",
                "title": "用户管理",
                "points": [                                 // 权限点
                    {
                        "id": 1106,
                        "pid": 1102,
                        "code": "base-users-list",
                        "title": "用户管理-读取"
                    },
                    {
                        "id": 1107,
                        "pid": 1102,
                        "code": "base-users-edit",
                        "title": "用户管理-修改"
                    }
                ]
            },
            {
                "id": 1103,
                "pid": 1101,
                "code": "base-menus",
                "title": "菜单管理",
            },
            {
                "id": 1104,
                "pid": 1101,
                "code": "base-permissions",
                "title": "权限管理",
            }
        ]
    }
]
```

#### 3.3菜单删除

> 基本信息


- 
**Path：** /menus/:id

- 
**Method：** DELETE

- 
**接口描述：** 层级删除


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 项id |


> 返回数据


```javascript
{}
```

#### 3.4菜单添加

> 基本信息


- 
**Path：** /menus

- 
**Method：** POST

- 
**接口描述：** 菜单项不能挂在权限点上，权限点只能挂在菜单项上


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  isPoint | boolean | 必须 |  | 是否权限点 |  |
|  pid | integer | 必须 |  | 父 id |  |
|  code | string | 必须 |  | 菜单代码 全局唯一 |  |
|  title | string | 必须 |  | 菜单标题 |  |


> 返回数据


```javascript
{}
```

#### 3.5菜单详情

> 基本信息


- 
**Path：** /menus/:id

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 项id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  pid | integer | 必须 |  | 父节点id |  |
|  isPoint | boolean | 必须 |  | 是否权限点 |  |
|  code | string | 必须 |  | 代码 | 枚举: base-users |
|  title | string | 必须 |  | 名称 | 枚举: 用户管理 |
|  id | integer | 必须 |  | 编号 | 最小值: 0 |


### 04-权限组管理

#### 4.1权限组修改

> 基本信息


- 
**Path：** /permissions/:id

- 
**Method：** PUT

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 必须 |  | 标题 |  |
|  permissions | integer [] | 必须 |  | 权限ids [1101,1102,1103] | item 类型: integer |


> 返回数据


```javascript
{}
```

#### 4.2权限组列表

> 基本信息


- 
**Path：** /permissions

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 是 | 1 | 当前页数 |
| pagesize | 是 | 10 | 页尺寸 |
| keyword | 是 |  | 关键字 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ title | string | 必须 |  | 名称 | format: ctitle |
| ├─ create_date | integer | 必须 |  | 创建时间 |  |


#### 4.3权限组删除

> 基本信息


- 
**Path：** /permissions/:id

- 
**Method：** DELETE

- 
**接口描述：** 无


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```json
{}
```

#### 4.4权限组添加

> 基本信息


- 
**Path：** /permissions

- 
**Method：** POST

- 
**接口描述：** 无


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 必须 |  | 标题 |  |
|  permissions | integer [] | 必须 |  | 权限ids [1101,1102,1103] | item 类型: integer |


> 返回数据


```json
{}
```

#### 4.5权限组简单列表

> 基本信息


- 
**Path：** /permissions/simple

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| keyword | 是 |  | 关键字 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ title | string | 必须 |  | 名称 | format: ctitle |


#### 4.6权限组详情

> 基本信息


- 
**Path：** /permissions/:id

- 
**Method：** GET

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 必须 |  | 标题 |  |
|  permissions | integer [] | 必须 |  | 权限ids [1101,1102,1103] | item 类型: integer |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 必须 |  | 名称 | format: ctitle |
|  permissions | integer [] | 必须 |  | 权限ids [1101,1102,1103] | item 类型: integer |
|  create_date | integer | 必须 |  | 创建时间 |  |
|  id | integer | 必须 |  | 编号 |  |


### 05-企业管理

#### 5.1企业管理修改

> 基本信息


- 
**Path：** /companys/:id

- 
**Method：** PUT

- 
**接口描述：** 无


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | string | 非必须 |  | 编号 |  |
|  number | integer | 非必须 |  | 企业编号 |  |
|  isFamous | boolean | 非必须 |  | 是否名企 |  |
|  shortName | string | 非必须 |  | 企业简称 |  |
|  company | string | 非必须 |  | 所属公司 |  |
|  province | string | 非必须 |  | 省份 |  |
|  city | string | 非必须 |  | 城市 |  |
|  tags | string | 非必须 |  | 标签 |  |
|  remarks | string | 非必须 |  | 备注 |  |


> 返回数据


```javascript
{}
```

#### 5.2企业管理列表

> 基本信息


- 
**Path：** /companys

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| tags | 否 |  | 标签名称 |
| province | 否 |  | 企业所在地省份 |
| city | 否 |  | 企业所在城市 |
| shortName | 否 |  | 企业简称 |
| state | 否 | 1 启用 0 禁用 | 状态 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ number | string | 必须 |  | 企业编号 |  |
| ├─ isFamous | boolean | 必须 |  | 是否名企 |  |
| ├─ shortName | string | 必须 |  | 企业简称 | format: ctitle |
| ├─ company | string | 必须 |  | 所属公司 | format: ctitle |
| ├─ province | string | 必须 |  | 省份 | format: ctitle |
| ├─ city | string | 必须 |  | 城市 | format: ctitle |
| ├─ tags | string | 必须 |  | 标签 | format: ctitle |
| ├─ remarks | string | 必须 |  | 备注 | format: ctitle |
| ├─ creatorID | string | 必须 |  | 创建者 | format: ctitle |
| ├─ addDate | string | 必须 |  | 创建日期 |  |
| ├─ state | boolean | 必须 |  | 状态 |  |


#### 5.3企业管理删除

> 基本信息


- 
**Path：** /companys/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```javascript
{}
```

#### 5.4企业管理添加

> 基本信息


- 
**Path：** /companys

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  isFamous | boolean | 非必须 |  | 是否名企 |  |
|  shortName | string | 非必须 |  | 企业简称 |  |
|  company | string | 非必须 |  | 所属公司 |  |
|  province | string | 非必须 |  | 省份 |  |
|  city | string | 非必须 |  | 城市 |  |
|  tags | string | 非必须 |  | 标签 |  |
|  remarks | string | 非必须 |  | 备注 |  |


> 返回数据


```javascript
{}
```

#### 5.5企业管理设置状态

> 基本信息


- 
**Path：** /companys/:id/:state

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| state |  | 状态 0 屏蔽 1 开启 |


> 返回数据


```javascript
{}
```

#### 5.6企业管理详情

> 基本信息


- 
**Path：** /companys/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | string | 必须 |  | 编号 |  |
|  number | string | 必须 |  | 企业编号 |  |
|  isFamous | boolean | 必须 |  | 是否名企 |  |
|  shortName | string | 必须 |  | 企业简称 | format: ctitle |
|  company | string | 必须 |  | 所属公司 | format: ctitle |
|  province | string | 必须 |  | 省份 | format: ctitle |
|  city | string | 必须 |  | 城市 | format: ctitle |
|  tags | string | 必须 |  | 标签 | format: ctitle |
|  remarks | string | 必须 |  | 备注 | format: ctitle |


### 06-题库管理

#### 6.1审核意见

> 基本信息


- 
**Path：** /questions/:id/auditOpinions

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 问题ID |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|   | object [] | 非必须 |  |  | item 类型: object |
| ├─ opinion | string | 必须 |  | 意见 |  |
| ├─ chkTime | string | 必须 |  | 时间 |  |
| ├─ checker | string | 必须 |  | 审核人 |  |


#### 6.2出题记录

> 基本信息


- 
**Path：** /questions/:id/setRecords

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 问题ID |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|   | object [] | 非必须 |  |  | item 类型: object |
| ├─ operation | string | 必须 |  | 操作 |  |
| ├─ setTime | string | 必须 |  | 出题时间 |  |
| ├─ setter | string | 必须 |  | 出题人 |  |


#### 6.3基础题库列表

> 基本信息


- 
**Path：** /questions

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


**Query**

| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| subjectID | 否 |  | 学科 |
| difficulty | 否 |  | 难度 |
| questionType | 否 |  | 试题类型 |
| tags | 否 |  | 标签名称 |
| province | 否 |  | 企业所在地省份 |
| city | 否 |  | 企业所在城市 |
| keyword | 否 |  | 关键字 |
| remarks | 否 |  | 题目备注 |
| shortName | 否 |  | 企业简称 |
| direction | 否 |  | 方向 |
| creatorID | 否 |  | 录入人 |
| catalogID | 否 |  | 目录 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | string | 必须 |  | 编号 |  |
| ├─ number | string | 必须 |  | 试题编号 |  |
| ├─ subjectID | number | 必须 |  | 学科 |  |
| ├─ catalogID | number | 必须 |  | 目录 |  |
| ├─ enterpriseID | number | 必须 |  | 企业 |  |
| ├─ province | string | 必须 |  | 省份 |  |
| ├─ city | string | 必须 |  | 城市 | format: ctitle |
| ├─ direction | string | 必须 |  | 方向 | format: ctitle |
| ├─ questionType | string | 必须 |  | 题型 | format: ctitle |
| ├─ difficulty | string | 必须 |  | 难度 | format: ctitle |
| ├─ question | string | 必须 |  | 题干 | format: ctitle |
| ├─ videoURL | string | 必须 |  | 解析视频 | 枚举: http://v.itheima.com/zycbrm2.mp4,
  http://45.252.224.197/mp4files/213200000CEAE47B/v.
  itheima.com/dc/xkdh/n12donghua.mp4,
  http://v.itheima.com/dd/huodong/
  s1jiaoshijiejiangshipian.mp4,
  http://45.252.224.200/mp4files/116600000D3D51A5/v.
  itheima.com/db/czr/javaxkft.mp4,
  http://45.252.224.70/mp4files/221100000AFAA271/v.
  itheima.com/dc/czxy/1114lkfzf.mp4,,,,, |
| ├─ answer | string | 必须 |  | 答案解析 | format: ctitle |
| ├─ remarks | string | 必须 |  | 题目备注 | format: ctitle |
| ├─ tags | string | 必须 |  | 试题标签 | format: ctitle |
| ├─ creator | string | 必须 |  | 录入人 | format: ctitle |
| ├─ addDate | string | 必须 |  | 录入时间 |  |


#### 6.4基础题库删除

> 基本信息


- 
**Path：** /questions/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```javascript
{}
```

#### 6.5基础题库添加

> 基本信息


- 
**Path：** /questions

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


**Body**

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  number | integer | 非必须 |  | 试题编号 | 后台自动生成（忽略） |
|  subjectID | string | 非必须 |  | 学科 |  |
|  catalogID | string | 非必须 |  | 目录 |  |
|  enterpriseID | string | 非必须 |  | 企业 |  |
|  province | string | 非必须 |  | 城市 |  |
|  city | string | 非必须 |  | 地区 |  |
|  direction | string | 非必须 |  | 方向 |  |
|  questionType | string | 非必须 |  | 题型 |  |
|  difficulty | string | 非必须 |  | 难度 |  |
|  question | string | 非必须 |  | 题干 |  |
|  options | object [] | 非必须 |  | 选项 | item 类型: object |
| ├─ code | string | 非必须 |  | 代码 |  |
| ├─ title | string | 非必须 |  | 标题 |  |
| ├─ img | string | 非必须 |  | 图片URL |  |
| ├─ isRight | boolean | 非必须 |  | 是否正确答案 |  |
|  videoURL | string | 非必须 |  | 解析视频 |  |
|  answer | string | 非必须 |  | 答案解析 |  |
|  remarks | string | 非必须 |  | 题目备注 |  |
|  tags | string | 非必须 |  | 试题标签 |  |
|  isPerfect | boolean | 非必须 |  | 是否精选题 | 后台自动生成（忽略） |


> 返回数据


```javascript
{}
```

#### 6.5基础题库详情

> 基本信息


- 
**Path：** /questions/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| isNext | 否 | isNext=true | 是否下一题 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  number | integer | 必须 |  | 试题编号 | 最大值: 500
最小值: 0 |
|  subjectID | string | 必须 |  | 学科 | format: ctitle |
|  catalogID | string | 必须 |  | 目录 | format: ctitle |
|  enterpriseID | string | 必须 |  | 企业 | format: ctitle |
|  province | string | 必须 |  | 省份 |  |
|  city | string | 必须 |  | 城市 | format: ctitle |
|  direction | string | 必须 |  | 方向 | format: ctitle |
|  questionType | string | 必须 |  | 题型 | format: ctitle |
|  difficulty | string | 必须 |  | 难度 | format: ctitle |
|  question | string | 必须 |  | 题干 | format: ctitle |
|  option | object [] | 必须 |  | 选项 | 最小数量: 3
元素是否都不同: true
最大数量: 5
item 类型: object |
| ├─ code | string | 必须 |  | 代码 |  |
| ├─ title | string | 必须 |  | 标题 |  |
| ├─ img | string | 必须 |  | 图片 | 枚举: http://www.itcast.cn/2018czgw/images/technology/icon1.png,http://www.itcast.cn/2018czgw/images/technology/icon2.png,http://www.itcast.cn/2018czgw/images/technology/icon3.png,http://www.itcast.cn/2018czgw/images/course/courserpic1.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic2.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic3.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic4.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic5.jpg,http://www.itcast.cn/2018czgw/images/course/courserpic6.jpg,,,,,,,, |
| ├─ id | string | 必须 |  | 编号 |  |
| ├─ isRight | boolean | 必须 |  | 是否正确答案 |  |
|  videoURL | string | 必须 |  | 解析视频 | 枚举: http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4,,,,,,, |
|  answerID | string | 必须 |  | 答案解析 | format: ctitle |
|  remarks | string | 必须 |  | 题目备注 | format: ctitle |
|  tags | string | 必须 |  | 试题标签 | format: ctitle |


#### 6.6基础题库修改

> 基本信息


- 
**Path：** /questions/:id

- 
**Method：** PUT

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | string | 非必须 |  | 编号 |  |
|  number | integer | 非必须 |  | 试题编号 |  |
|  subjectID | string | 非必须 |  | 学科 |  |
|  catalogID | string | 非必须 |  | 目录 |  |
|  enterpriseID | string | 非必须 |  | 企业 |  |
|  city | string | 非必须 |  | 城市 |  |
|  direction | string | 非必须 |  | 方向 |  |
|  questionType | string | 非必须 |  | 题型 |  |
|  difficulty | string | 非必须 |  | 难度 |  |
|  question | string | 非必须 |  | 题干 |  |
|  option | object [] | 非必须 |  | 选项 | item 类型: object |
| ├─ id | string | 非必须 |  | 编号 |  |
| ├─ code | string | 非必须 |  | 代码 |  |
| ├─ title | string | 非必须 |  | 标题 |  |
| ├─ img | string | 非必须 |  | 图片URL |  |
| ├─ isRight | boolean | 非必须 |  | 是否正确答案 |  |
|  videoURL | string | 非必须 |  | 解析视频 |  |
|  answerID | string | 非必须 |  | 答案解析 |  |
|  remarks | string | 非必须 |  | 题目备注 |  |
|  tags | string | 非必须 |  | 试题标签 |  |
|  creator | string | 非必须 |  | 录入人 |  |
|  addDate | integer | 非必须 |  | 录入时间 |  |


> 返回数据


```javascript
{}
```

#### 6.7批量导入题

> 基本信息


- 
**Path：** /questions/batch

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  subjectID | string | 必须 |  | 学科ID |  |
|  fileID | string | 必须 |  | 文件id |  |


> 返回数据


```javascript
{}
```

#### 6.8精选题库上下架

> 基本信息


- 
**Path：** /questions/choice/:id/:publishState

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| publishState |  | 1 上架 0 下架 |


> 返回数据


```javascript
{}
```

#### 6.9精选题库列表

> 基本信息


- 
**Path：** /questions/choice

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


**Query**

| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| subjectID | 否 |  | 学科 |
| difficulty | 否 |  | 难度 |
| questionType | 否 |  | 试题类型 |
| tags | 否 |  | 标签名称 |
| province | 否 |  | 企业所在地省份 |
| city | 否 |  | 企业所在城市 |
| keyword | 否 |  | 关键字 |
| remarks | 否 |  | 题目备注 |
| shortName | 否 |  | 企业简称 |
| direction | 否 |  | 方向 |
| creatorID | 否 |  | 录入人 |
| catalogID | 否 |  | 目录 |
| chkState | 否 | 0 待审核 1 通过 2 拒绝 | 审核状态 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | string | 必须 |  | 编号 |  |
| ├─ number | string | 必须 |  | 试题编号 |  |
| ├─ subjectID | number | 必须 |  | 学科 |  |
| ├─ catalogID | number | 必须 |  | 目录 |  |
| ├─ enterpriseID | number | 必须 |  | 企业 |  |
| ├─ province | string | 必须 |  | 省份 |  |
| ├─ city | string | 必须 |  | 城市 | format: ctitle |
| ├─ direction | string | 必须 |  | 方向 | format: ctitle |
| ├─ questionType | string | 必须 |  | 题型 | format: ctitle |
| ├─ difficulty | string | 必须 |  | 难度 | format: ctitle |
| ├─ question | string | 必须 |  | 题干 | format: ctitle |
| ├─ videoURL | string | 必须 |  | 解析视频 | 枚举: http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4,,,,,, |
| ├─ answer | string | 必须 |  | 答案解析 | format: ctitle |
| ├─ remarks | string | 必须 |  | 题目备注 | format: ctitle |
| ├─ tags | string | 必须 |  | 试题标签 | format: ctitle |
| ├─ creator | string | 必须 |  | 录入人 | format: ctitle |
| ├─ addDate | string | 必须 |  | 录入时间 |  |
| ├─ chkState | string | 必须 |  | 筛选状态 0 待审核 1 通过 2 拒绝 |  |
| ├─ chkUser | string | 必须 |  | 审核人 |  |
| ├─ chkDate | string | 必须 |  | 审核日期 |  |
| ├─ chkRemarks | string | 必须 |  | 审核意见 |  |
| ├─ publishState | string | 必须 |  | 1 上架 0 下架  |  |


#### 6.10组题列表

> 基本信息


- **Path：** /questions/randoms/

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| keyword | 否 |  | 关键字 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | string | 必须 |  | 编号 |  |
| ├─ addTime | string | 必须 |  | 组题时间 |  |
| ├─ userName | string | 必须 |  | 用户名 | format: ctitle |
| ├─ questionIDs | string [] | 必须 |  | 试题ID | item 类型: string |
| ├─ progressOfAnswer | integer | 必须 |  | 答题进度 | 最大值: 100
最小值: 10 |
| ├─ accuracyRate | integer | 必须 |  | 正确率 | 最大值: 100
最小值: 10 |
| ├─ totalSeconds | integer | 必须 |  | 答题总耗时秒 | 最大值: 5000
最小值: 100 |
| ├─ questionType | string | 必须 |  | 组题类型 | format: ctitle |


#### 6.11组题列表删除

> 基本信息


- **Path：** /questions/randoms/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```json
{}
```

#### 6.12加入或移出精选

> 基本信息


- 
**Path：** /questions/choice/:id/:choiceState

- 
**Method：** PATCH

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| choiceState |  | 1 加入 0 移出 |


> 返回数据


```javascript
{}
```

#### 6.13试题审核

> 基本信息


- 
**Path：** /questions/check/:id

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **body**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| chkState |  | 1 通过 2 不通过 |
| chkRemarks |  | 原因 |


> 返回数据


```json
{}
```

### 07-学科管理

#### 7.1标签添加

> 基本信息


- 
**Path：** /tags

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  subjectID | string | 必须 |  | 学科ID |  |
|  tagName | string | 必须 |  | 标签名称 |  |


> 返回数据


```javascript
{}
```

#### 7.2学科修改

> 基本信息


- 
**Path：** /subjects/:id

- 
**Method：** PUT

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| subjectName | 否 |  | 学科名称 |


> 返回数据


```json
{}
```

#### 7.3学科删除

> 基本信息


- 
**Path：** /subjects/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```javascript
{}
```

#### 7.4学科添加

> 基本信息


- 
**Path：** /subjects

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **Body**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| subjectName | 是 |  | 学科名称 |
| isFrontDisplay | 是 |  | 是否在页面显示 1是 0否 |


> 返回数据


```javascript
{}
```

#### 7.5学科简单列表

> 基本信息


- 
**Path：** /subjects/simple

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


**Query**

| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| subjectName | 否 |  | 学科名称 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|   | object [] | 非必须 |  |  | 最小数量: 3
元素是否都不同: false
item 类型: object |
| ├─ value | string | 必须 |  | 数据ID |  |
| ├─ label | string | 必须 |  | 标题 | 枚举: MySQL,面向对象,JavaScript,HTML,CSS |


#### 7.6学科详情

> 基本信息


- 
**Path：** /subjects/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  subjectName | string | 必须 |  | 学科名称 | format: ctitle |
|  creator | string | 必须 |  | 创建者 | format: ctitle |
|  addDate | integer | 必须 |  | 创建日期 | 最大值: 1537169459
最小值: 1537165459 |
|  isFrontDisplay | boolean | 必须 |  | 前台是否显示 |  |
|  twoLevelDirectory | string | 必须 |  | 二级目录 | format: ctitle |
|  tags | string | 必须 |  | 标签 | format: ctitle |
|  totals | integer | 必须 |  | 题目数量 | 最大值: 500
最小值: 0 |


#### 7.7标签修改

> 基本信息


- 
**Path：** /tags/:id

- 
**Method：** PUT

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  subjectID | string | 必须 |  | 学科ID |  |
|  tagName | string | 必须 |  | 标签名称 |  |


> 返回数据


```javascript
{}
```

#### 7.8标签列表

> 基本信息


- 
**Path：** /tags

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| subjectID | 否 |  | 学科ID |
| tagName | 否 |  | 标签名称 |
| state | 否 |  | 状态 1 开启 0 屏蔽 |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  oldPassword | string | 必须 |  | 旧密码 |  |
|  newPassword | string | 必须 |  | 新密码 |  |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ subjectName | string | 必须 |  | 学科名称 | format: ctitle |
| ├─ tagName | string | 必须 |  | 标签名称 | format: ctitle |
| ├─ creator | string | 必须 |  | 创建者 | format: ctitle |
| ├─ addDate | string | 必须 |  | 创建日期 |  |
| ├─ totals | integer | 必须 |  | 面试题数量 | 最大值: 500
最小值: 0 |
| ├─ state | string | 必须 |  | 状态 | format: ctitle |


#### 7.9标签删除

[ ]()

> 基本信息


- 
**Path：** /tags/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```javascript
{}
```

#### 7.10学科列表

> 基本信息


- 
**Path：** /subjects

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| subjectName | 否 |  | 学科名称 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | string | 必须 |  | 编号 |  |
| ├─ subjectName | string | 必须 |  | 学科名称 | format: ctitle |
| ├─ creator | string | 必须 |  | 创建者 | format: ctitle |
| ├─ addDate | string | 必须 |  | 创建日期 |  |
| ├─ isFrontDisplay | boolean | 必须 |  | 前台是否显示 |  |
| ├─ twoLevelDirectory | string | 必须 |  | 二级目录 | format: ctitle |
| ├─ tags | string | 必须 |  | 标签 | format: ctitle |
| ├─ totals | integer | 必须 |  | 题目数量 | 最大值: 500
最小值: 0 |


#### 7.11标签状态

> 基本信息


- 
**Path：** /tags/:id/:state

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| state |  | 状态 1 启用 0 屏蔽 |


> 返回数据


```javascript
{}
```

#### 7.12标签详情

> 基本信息


- 
**Path：** /tags/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  subjectName | string | 必须 |  | 学科名称 | format: ctitle |
|  tagName | string | 必须 |  | 标签名称 | format: ctitle |
|  creator | string | 必须 |  | 创建者 | format: ctitle |
|  addDate | integer | 必须 |  | 创建日期 | 最大值: 1537169459
最小值: 1537165459 |
|  totals | integer | 必须 |  | 面试题数量 | 最大值: 500
最小值: 0 |
|  state | string | 必须 |  | 状态 | format: ctitle |


#### 7.13目录修改

> 基本信息


- 
**Path：** /directorys/:id

- 
**Method：** PUT

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  subjectID | string | 必须 |  | 学科ID |  |
|  directoryName | string | 必须 |  | 目录名称 |  |


> 返回数据


```javascript
{}
```

#### 7.14目录列表

> 基本信息


- 
**Path：** /directorys

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


**Query**

| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| subjectID | 否 |  | 学科ID |
| directoryName | 否 |  | 目录名称 |
| state | 否 |  | 状态 1 开启 0 屏蔽 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ subjectName | string | 必须 |  | 学科名称 | format: ctitle |
| ├─ directoryName | string | 必须 |  | 目录名称 | format: ctitle |
| ├─ creator | string | 必须 |  | 创建者 | format: ctitle |
| ├─ addDate | string | 必须 |  | 创建日期 |  |
| ├─ totals | integer | 必须 |  | 面试题数量 | 最大值: 500
最小值: 0 |
| ├─ state | string | 必须 |  | 状态 | format: ctitle |


#### 7.15目录删除

> 基本信息


- 
**Path：** /directorys/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 目录ID |


> 返回数据


```javascript
{}
```

#### 7.16目录添加

> 基本信息


- 
**Path：** /directorys

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


**Body**

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  subjectID | string | 必须 |  | 学科ID |  |
|  directoryName | string | 必须 |  | 目录名称 |  |


> 返回数据


```javascript
{}
```

#### 7.17目录状态

> 基本信息


- 
**Path：** /directorys/:id/:state

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


**路径参数**

| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| state |  | 状态 1 启用 0 屏蔽 |


> 返回数据


```javascript
{}
```

#### 7.18目录详情

> 基本信息


- 
**Path：** /directorys/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  subjectName | string | 必须 |  | 学科名称 | format: ctitle |
|  directoryName | string | 必须 |  | 目录名称 | format: ctitle |
|  creator | string | 必须 |  | 创建者 | format: ctitle |
|  addDate | integer | 必须 |  | 创建日期 | 最大值: 1537169459
最小值: 1537165459 |
|  totals | integer | 必须 |  | 面试题数量 | 最大值: 500
最小值: 0 |
|  state | string | 必须 |  | 状态 | format: ctitle |


### 08-面试技巧

#### 8.1文章列表

> 基本信息


- 
**Path：** /articles

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **Query**


| 参数名称 | 是否必须 | 示例 | 备注 |
| --- | --- | --- | --- |
| page | 否 | 1 | 当前页数 |
| pagesize | 否 | 10 | 页尺寸 |
| keyword | 否 |  | 关键字 |
| state | 否 |  | 状态 1 开启 0 屏蔽 |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  counts | integer | 必须 |  | 总记录数 | 最大值: 5000
最小值: 100 |
|  pagesize | integer | 必须 |  | 页大小 | 最大值: 50
最小值: 5 |
|  pages | integer | 必须 |  | 总页数 | 最大值: 100
最小值: 1 |
|  page | integer | 必须 |  | 当前页码 | 最大值: 100
最小值: 1 |
|  items | object [] | 必须 |  | 列表 | 最小数量: 10
元素是否都不同: true
最大数量: 20
item 类型: object |
| ├─ id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
| ├─ title | string | 必须 |  | 标题 | format: ctitle |
| ├─ articleBody | string | 必须 |  | 文章正文 | format: ctitle |
| ├─ videoURL | string | 必须 |  | 视频地址 | 枚举: http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4 |
| ├─ reads | integer | 必须 |  | 阅读数 | 最大值: 500
最小值: 0 |
| ├─ state | boolean | 必须 |  | 状态 |  |
| ├─ creator | string | 必须 |  | 录入人 | format: ctitle |


#### 8.2文章删除

> 基本信息


- 
**Path：** /articles/:id

- 
**Method：** DELETE

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据


```javascript
{}
```

#### 8.3文章添加

> 基本信息


- 
**Path：** /articles

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 非必须 |  | 标题 |  |
|  articleBody | string | 非必须 |  | 文章正文 |  |
|  videoURL | string | 非必须 |  | 视频地址 |  |


> 返回数据


```javascript
{}
```

#### 8.4文章状态

> 基本信息


- 
**Path：** /articles/:id/:state

- 
**Method：** POST

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |
| state |  | 状态 1 开启 0 屏蔽 |


> 返回数据


```javascript
{}
```

#### 8.5文章编辑

> 基本信息


- 
**Path：** /articles/:id

- 
**Method：** PUT

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


- **Body**


| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  title | string | 非必须 |  | 标题 |  |
|  articleBody | string | 非必须 |  | 文章正文 |  |
|  videoURL | string | 非必须 |  | 视频地址 |  |


> 返回数据


```javascript
{}
```

#### 8.6文章详情

> 基本信息


- 
**Path：** /articles/:id

- 
**Method：** GET

- 
**接口描述：**


> 请求参数


- **路径参数**


| 参数名称 | 示例 | 备注 |
| --- | --- | --- |
| id |  | 数据id |


> 返回数据

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
|  id | integer | 必须 |  | 编号 | 最大值: 9010000
最小值: 9000001 |
|  title | string | 必须 |  | 标题 | format: ctitle |
|  articleBody | string | 必须 |  | 文章正文 | format: ctitle |
|  videoURL | string | 必须 |  | 视频地址 | 枚举: http://v.itheima.com/zycbrm2.mp4,http://45.252.224.197/mp4files/213200000CEAE47B/v.itheima.com/dc/xkdh/n12donghua.mp4,http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4,http://45.252.224.200/mp4files/116600000D3D51A5/v.itheima.com/db/czr/javaxkft.mp4,http://45.252.224.70/mp4files/221100000AFAA271/v.itheima.com/dc/czxy/1114lkfzf.mp4 |
|  reads | integer | 必须 |  | 阅读数 | 最大值: 500
最小值: 0 |
|  state | string | 必须 |  | 状态 | format: ctitle |
|  creator | string | 必须 |  | 录入人 | format: ctitle |

