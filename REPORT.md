Do we use React Native to build gallery?
======

## API Compatibility

We hope that our app can run in `iOS 9.3` and `4.0 (API 14)` above. RN has good support for `iOS`, but a fly in the ointment, `Android 4.0.*` is not in the coverage.

| Platform | ReactNative Guaranteed | Our App |
| --- | --- | --- |
| iOS | `iOS 8.0` | `iOS 9.3` |
| Android | `4.1 (API 16)` | `4.0 (API 14)` |

## Performance

The following quote a performance comparison from [H5、React Native、Native 应用对比分析](http://vczero.github.io/react_native/H5-React-Native-Native.html)

> 1、开发方式  
>
> （1）代码结构： React Native 更为合理，组件化程度高  
> （2）UI 布局：Web 布局灵活度 > React Native > Native  
> （3）UI 截面图：React Native 使用的是原生组件  
> （4）路由／Navigation：React Native & Native 更胜一筹  
> （5）第三方生态链：Native modules + js modules = React Native modules  

> 2、性能 & 体验  
>
> （1）内存：Native 最少；因为 React Native 含有框架，所以相对较高，但是后期平稳后会优于 Native  
> （2）CPU：React Native 居中  
> （3）动画：React Native 动画需求基本满足  
> （4）安装包体积：React Native 框架打包后，811KB。相比热更新，可以忽略和考虑资源规划  
> （5）Big ListView  
> （6）真机体验：Native >= React Native > H5/Hybrid  

> 3、更新 & 维护  
>
> （1）更新能力: H5/Hybird > React Native > Native  
> （2）维护成本: H5/Hybird <= React Native < Native  

> React Native 定制难度相比 Native 有些大；但是具备跨平台能力和热更新能力。 

## Estimated Duration

The following table lists required tasks to complete the Gallery across `iOS`/`Android`/`Web` and the estimated time.

| Label | No. | Task | WorkDays | Detail |
| --- | --- | --- | --- | --- |
| Summary |  | Total(Core) | **7 weeks(35 days)** | Core Features |
| Summary |  | Total | **13 weeks(65 days)** | All Features |
| Core | 0 | Setup | _15_ |  |
|  | 0.1 | Setup ReactNative ENV | 1 |  |
|  | 0.2 | Setup iOS entry | 4 | Embed new gallery in iOS app |
|  | 0.3 | Setup Android entry | 5 | Embed new gallery in Android app |
|  | 0.4 | Local Storage | 5 | CRUD to local database `sqlite` |
| Core | 1 | UI | _15_ |  |
|  | 1.1 | Layout | 2 |  |
|  | 1.2 | Reorder and Multi-select | 7 |  |
|  | 1.3 | New/Delete/Save sketch | 4 | Connect api in main app |
|  | 1.4 | Styling | 2 | Detail interaction, Blur effect |
| Core | 2 | Debug | _5_ |  |
|  | 2.1 | iOS | 2 | Debug on different version |
|  | 2.2 | Android | 3 | Debug on different version |
| Optional | 3 | Feature | _25_ |  |
|  | 3.1 | Edit sketch (Rotate/Scale) | 5 | Connect advanced api in main app |
|  | 3.2 | iCloud Storage | 5 | CRUD to iCloud |
|  | 3.3 | Preview and SlideShow | 10 |  |
|  | 3.4 | Scan sketch | 5 |  |
| Optional | 4 | Web | _5_ |  |
|  | 4.1 | Setup web entry | 2 | deployment and config |
|  | 4.2 | adaptation | 3 |  |
