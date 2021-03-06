## GLTF数据加载

### 示例功能

本示例实现在三维场景中添加GLTF模型。

> 什么是GLTF？

GLTF（GL Transmission Format），即图形语言交换格式，是一种三维数据的格式标准，由Khronos Group推出。由于三维数据格式众多，所以其致力于成为像音频界的MP3、图像界的JPEG那样的3D领域通用的数据格式。目前多款三维软件支持了GLTF格式数据的读写，如Maya、3dmax、unity等等。采用GLTF可避免不同软件中数据转换操作造成的各方面问题。
<a href="https://www.khronos.org/gltf/" target="_blank">GLTF官方介绍</a>

### 示例实现

本示例需要使用【include-cesium-local.js】开发库实现，关键接口为`CesiumZondy.Manager.CommonDataManager`类提供的`appendModel()`方法，实现GLTF模型数据的加载。

> 开发库使用请参见*首页-概述-原生JS调用*内容。

### 实现步骤

1. 引用开发库：本示例引用local本地【include-cesium-local.js】开发库，完成此步骤后才可调用三维WebGL的功能；

2. 创建三维视图Div容器，构造三维场景控件WebSceneControl，构造并设置鼠标位置信息显示控件，加载Google地图作为底图显示；

3. 添加模型：首先构造`CesiumZondy.Manager.CommonDataManager`通用数据管理对象，然后调用`appendModel()`方法，并设置模型id、模型文件URL路径、模型所在经纬度、高度、缩放比参数信息，即可实现GLTF模型的加载。如果模型自带动画，需要设置`webGlobe.viewer.clock.shouldAnimate`参数为true来开启动画。

    ``` javascript
    //构造通用数据管理对象
    var commonDataManager = new CesiumZondy.Manager.CommonDataManager({
        viewer: webGlobe.viewer
    });

    //开启动画：如果模型自带动画，需开启此参数
    webGlobe.viewer.clock.shouldAnimate = true;

    //添加模型（gltf文件）
    var model = commonDataManager.appendModel(
        //模型id
        'model',
        //模型文件URL路径
        './static/data/model/WuRenJi/WuRenJi.gltf',
        //模型经度、纬度、高度
        114.3938, 30.5045, 200,
        //缩放比
        200
    );
    ```

### 关键接口

#### 1.【三维场景控件】WebSceneControl

#### 2.【通用数据管理类】CesiumZondy.Manager.CommonDataManager

##### （1）`appendModel(id, url, lon, lat, height, scale) → {Object}`：添加模型（gltf文件）

|参数名|类 型|说 明|
|-|-|-|
|id|Number|模型id|
|url|String|模型url路径|
|lon|Number|模型所在经度|
|lat|Number|模型坐在纬度|
|height|Number|高度|
|scale|Number|缩放比|
|options|Object|附加参数|

> `options`属性主要参数

|参数名|类 型|说 明|
|-|-|-|
|color|Color|颜色|
|colorBlendMode|ColorBlendMode|颜色混合模式 Cesium.ColorBlendMode.MIX|
|colorBlendAmount|Number|颜色混合程度|
