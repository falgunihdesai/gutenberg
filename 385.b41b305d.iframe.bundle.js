"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[385],{"./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var valtio_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/valtio/esm/utils.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/process/browser.js");const SlotFillContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({slots:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_1__.Yr)(),fills:(0,valtio_utils__WEBPACK_IMPORTED_MODULE_1__.Yr)(),registerSlot:()=>{void 0!==process&&process.env},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{}});__webpack_exports__.Z=SlotFillContext},"./packages/components/src/slot-fill/bubbles-virtually/use-slot.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useSlot}});var valtio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/valtio/esm/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.js");function useSlot(name){const registry=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__.Z);return{...(0,valtio__WEBPACK_IMPORTED_MODULE_2__.RK)(registry.slots,{sync:!0}).get(name),...(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({updateSlot:fillProps=>registry.updateSlot(name,fillProps),unregisterSlot:ref=>registry.unregisterSlot(name,ref),registerFill:ref=>registry.registerFill(name,ref),unregisterFill:ref=>registry.unregisterFill(name,ref)})),[name,registry])}}},"./packages/components/src/slot-fill/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{de:function(){return slot_fill_Fill},zt:function(){return Provider},g7:function(){return slot_fill_Slot},up:function(){return createSlotFill}});var react=__webpack_require__("./node_modules/react/index.js");var context=(0,react.createContext)({registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},getSlot:()=>{},getFills:()=>{},subscribe:()=>{}});var use_slot=name=>{const{getSlot:getSlot,subscribe:subscribe}=(0,react.useContext)(context);return(0,react.useSyncExternalStore)(subscribe,(()=>getSlot(name)),(()=>getSlot(name)))};function Fill(_ref){let{name:name,children:children}=_ref;const{registerFill:registerFill,unregisterFill:unregisterFill}=(0,react.useContext)(context),slot=use_slot(name),ref=(0,react.useRef)({name:name,children:children});return(0,react.useLayoutEffect)((()=>{const refValue=ref.current;return registerFill(name,refValue),()=>unregisterFill(name,refValue)}),[]),(0,react.useLayoutEffect)((()=>{ref.current.children=children,slot&&slot.forceUpdate()}),[children]),(0,react.useLayoutEffect)((()=>{name!==ref.current.name&&(unregisterFill(ref.current.name,ref.current),ref.current.name=name,registerFill(name,ref.current))}),[name]),null}var utils=__webpack_require__("./packages/element/build-module/utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function isFunction(maybeFunc){return"function"==typeof maybeFunc}class SlotComponent extends react.Component{constructor(){super(...arguments),this.isUnmounted=!1}componentDidMount(){const{registerSlot:registerSlot}=this.props;this.isUnmounted=!1,registerSlot(this.props.name,this)}componentWillUnmount(){const{unregisterSlot:unregisterSlot}=this.props;this.isUnmounted=!0,unregisterSlot(this.props.name,this)}componentDidUpdate(prevProps){const{name:name,unregisterSlot:unregisterSlot,registerSlot:registerSlot}=this.props;prevProps.name!==name&&(unregisterSlot(prevProps.name),registerSlot(name,this))}forceUpdate(){this.isUnmounted||super.forceUpdate()}render(){var _getFills;const{children:children,name:name,fillProps:fillProps={},getFills:getFills}=this.props,fills=(null!==(_getFills=getFills(name,this))&&void 0!==_getFills?_getFills:[]).map((fill=>{const fillChildren=isFunction(fill.children)?fill.children(fillProps):fill.children;return react.Children.map(fillChildren,((child,childIndex)=>{if(!child||"string"==typeof child)return child;const childKey=child.key||childIndex;return(0,react.cloneElement)(child,{key:childKey})}))})).filter((element=>!(0,utils.V)(element)));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isFunction(children)?children(fills):fills})}}SlotComponent.displayName="SlotComponent";const Slot=props=>(0,jsx_runtime.jsx)(context.Consumer,{children:_ref=>{let{registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills}=_ref;return(0,jsx_runtime.jsx)(SlotComponent,{...props,registerSlot:registerSlot,unregisterSlot:unregisterSlot,getFills:getFills})}});Slot.displayName="Slot",Slot.__docgenInfo={description:"",methods:[],displayName:"Slot"};var slot=Slot;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/slot.js"]={name:"Slot",docgenInfo:Slot.__docgenInfo,path:"packages/components/src/slot-fill/slot.js"});var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),bubbles_virtually_use_slot=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/use-slot.js"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx");function fill_Fill(_ref){let{name:name,children:children}=_ref;const{registerFill:registerFill,unregisterFill:unregisterFill,...slot}=(0,bubbles_virtually_use_slot.Z)(name),rerender=function useForceUpdate(){const[,setState]=(0,react.useState)({}),mounted=(0,react.useRef)(!0);return(0,react.useEffect)((()=>(mounted.current=!0,()=>{mounted.current=!1})),[]),()=>{mounted.current&&setState({})}}(),ref=(0,react.useRef)({rerender:rerender});if((0,react.useEffect)((()=>(registerFill(ref),()=>{unregisterFill(ref)})),[registerFill,unregisterFill]),!slot.ref||!slot.ref.current)return null;"function"==typeof children&&(children=children(slot.fillProps));const wrappedChildren=(0,jsx_runtime.jsx)(style_provider.Z,{document:slot.ref.current.ownerDocument,children:children});return(0,react_dom.createPortal)(wrappedChildren,slot.ref.current)}var use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),slot_fill_context=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.js");function slot_Slot(_ref,forwardedRef){let{name:name,fillProps:fillProps={},as:Component="div",...props}=_ref;const{registerSlot:registerSlot,unregisterSlot:unregisterSlot,...registry}=(0,react.useContext)(slot_fill_context.Z),ref=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>(registerSlot(name,ref,fillProps),()=>{unregisterSlot(name,ref)})),[registerSlot,unregisterSlot,name]),(0,react.useLayoutEffect)((()=>{registry.updateSlot(name,fillProps)})),(0,jsx_runtime.jsx)(Component,{ref:(0,use_merge_refs.Z)([forwardedRef,ref]),...props})}slot_Slot.displayName="Slot",slot_Slot.__docgenInfo={description:"",methods:[],displayName:"Slot",props:{fillProps:{defaultValue:{value:"{}",computed:!1},required:!1},as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};var bubbles_virtually_slot=(0,react.forwardRef)(slot_Slot);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot.js"]={name:"Slot",docgenInfo:slot_Slot.__docgenInfo,path:"packages/components/src/slot-fill/bubbles-virtually/slot.js"});var vanilla=__webpack_require__("./node_modules/valtio/esm/vanilla.js"),esm_utils=__webpack_require__("./node_modules/valtio/esm/utils.js"),build_module=__webpack_require__("./packages/is-shallow-equal/build-module/index.js");function createSlotRegistry(){const slots=(0,esm_utils.Yr)(),fills=(0,esm_utils.Yr)();return{slots:slots,fills:fills,registerSlot:function registerSlot(name,ref,fillProps){const slot=slots.get(name)||{};slots.set(name,(0,vanilla.iH)({...slot,ref:ref||slot.ref,fillProps:fillProps||slot.fillProps||{}}))},updateSlot:function updateSlot(name,fillProps){const slot=slots.get(name);if(!slot)return;if((0,build_module.ZP)(slot.fillProps,fillProps))return;slot.fillProps=fillProps;const slotFills=fills.get(name);slotFills&&slotFills.map((fill=>fill.current.rerender()))},unregisterSlot:function unregisterSlot(name,ref){var _slots$get;(null===(_slots$get=slots.get(name))||void 0===_slots$get?void 0:_slots$get.ref)===ref&&slots.delete(name)},registerFill:function registerFill(name,ref){fills.set(name,(0,vanilla.iH)([...fills.get(name)||[],ref]))},unregisterFill:function unregisterFill(name,ref){const fillsForName=fills.get(name);fillsForName&&fills.set(name,(0,vanilla.iH)(fillsForName.filter((fillRef=>fillRef!==ref))))}}}function SlotFillProvider(_ref){let{children:children}=_ref;const[registry]=(0,react.useState)(createSlotRegistry);return(0,jsx_runtime.jsx)(slot_fill_context.Z.Provider,{value:registry,children:children})}SlotFillProvider.displayName="SlotFillProvider",SlotFillProvider.__docgenInfo={description:"",methods:[],displayName:"SlotFillProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.js"]={name:"SlotFillProvider",docgenInfo:SlotFillProvider.__docgenInfo,path:"packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.js"});class provider_SlotFillProvider extends react.Component{constructor(){super(...arguments),this.registerSlot=this.registerSlot.bind(this),this.registerFill=this.registerFill.bind(this),this.unregisterSlot=this.unregisterSlot.bind(this),this.unregisterFill=this.unregisterFill.bind(this),this.getSlot=this.getSlot.bind(this),this.getFills=this.getFills.bind(this),this.subscribe=this.subscribe.bind(this),this.slots={},this.fills={},this.listeners=[],this.contextValue={registerSlot:this.registerSlot,unregisterSlot:this.unregisterSlot,registerFill:this.registerFill,unregisterFill:this.unregisterFill,getSlot:this.getSlot,getFills:this.getFills,subscribe:this.subscribe}}registerSlot(name,slot){const previousSlot=this.slots[name];this.slots[name]=slot,this.triggerListeners(),this.forceUpdateSlot(name),previousSlot&&previousSlot.forceUpdate()}registerFill(name,instance){this.fills[name]=[...this.fills[name]||[],instance],this.forceUpdateSlot(name)}unregisterSlot(name,instance){this.slots[name]===instance&&(delete this.slots[name],this.triggerListeners())}unregisterFill(name,instance){var _this$fills$name$filt,_this$fills$name;this.fills[name]=null!==(_this$fills$name$filt=null===(_this$fills$name=this.fills[name])||void 0===_this$fills$name?void 0:_this$fills$name.filter((fill=>fill!==instance)))&&void 0!==_this$fills$name$filt?_this$fills$name$filt:[],this.forceUpdateSlot(name)}getSlot(name){return this.slots[name]}getFills(name,slotInstance){return this.slots[name]!==slotInstance?[]:this.fills[name]}forceUpdateSlot(name){const slot=this.getSlot(name);slot&&slot.forceUpdate()}triggerListeners(){this.listeners.forEach((listener=>listener()))}subscribe(listener){return this.listeners.push(listener),()=>{this.listeners=this.listeners.filter((l=>l!==listener))}}render(){return(0,jsx_runtime.jsx)(context.Provider,{value:this.contextValue,children:this.props.children})}}function slot_fill_Fill(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Fill,{...props}),(0,jsx_runtime.jsx)(fill_Fill,{...props})]})}provider_SlotFillProvider.displayName="SlotFillProvider",provider_SlotFillProvider.__docgenInfo={description:"",methods:[{name:"registerSlot",docblock:null,modifiers:[],params:[{name:"name",type:null},{name:"slot",type:null}],returns:null},{name:"registerFill",docblock:null,modifiers:[],params:[{name:"name",type:null},{name:"instance",type:null}],returns:null},{name:"unregisterSlot",docblock:null,modifiers:[],params:[{name:"name",type:null},{name:"instance",type:null}],returns:null},{name:"unregisterFill",docblock:null,modifiers:[],params:[{name:"name",type:null},{name:"instance",type:null}],returns:null},{name:"getSlot",docblock:null,modifiers:[],params:[{name:"name",type:null}],returns:null},{name:"getFills",docblock:null,modifiers:[],params:[{name:"name",type:null},{name:"slotInstance",type:null}],returns:null},{name:"forceUpdateSlot",docblock:null,modifiers:[],params:[{name:"name",type:null}],returns:null},{name:"triggerListeners",docblock:null,modifiers:[],params:[],returns:null},{name:"subscribe",docblock:null,modifiers:[],params:[{name:"listener",type:null}],returns:null}],displayName:"SlotFillProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/provider.js"]={name:"SlotFillProvider",docgenInfo:provider_SlotFillProvider.__docgenInfo,path:"packages/components/src/slot-fill/provider.js"});const slot_fill_Slot=(0,react.forwardRef)(((_ref,ref)=>{let{bubblesVirtually:bubblesVirtually,...props}=_ref;return bubblesVirtually?(0,jsx_runtime.jsx)(bubbles_virtually_slot,{...props,ref:ref}):(0,jsx_runtime.jsx)(slot,{...props})}));function Provider(_ref2){let{children:children,...props}=_ref2;return(0,jsx_runtime.jsx)(provider_SlotFillProvider,{...props,children:(0,jsx_runtime.jsx)(SlotFillProvider,{children:children})})}function createSlotFill(key){const baseName="symbol"==typeof key?key.description:key,FillComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Fill,{name:key,...props});FillComponent.displayName=`${baseName}Fill`;const SlotComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Slot,{name:key,...props});return SlotComponent.displayName=`${baseName}Slot`,SlotComponent.__unstableName=key,{Fill:FillComponent,Slot:SlotComponent}}Provider.displayName="Provider";slot_fill_Fill.__docgenInfo={description:"",methods:[],displayName:"Fill"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.js"]={name:"Fill",docgenInfo:slot_fill_Fill.__docgenInfo,path:"packages/components/src/slot-fill/index.js"}),Provider.__docgenInfo={description:"",methods:[],displayName:"Provider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.js"]={name:"Provider",docgenInfo:Provider.__docgenInfo,path:"packages/components/src/slot-fill/index.js"})},"./packages/components/src/style-provider/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_cache__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),memize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/memize/dist/index.js"),uuid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const uuidCache=new Set,memoizedCreateCacheWithContainer=(0,memize__WEBPACK_IMPORTED_MODULE_2__.Z)((container=>{let key=uuid__WEBPACK_IMPORTED_MODULE_3__.Z().replace(/[0-9]/g,"");for(;uuidCache.has(key);)key=uuid__WEBPACK_IMPORTED_MODULE_3__.Z().replace(/[0-9]/g,"");return uuidCache.add(key),(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__.Z)({container:container,key:key})}));function StyleProvider(props){const{children:children,document:document}=props;if(!document)return null;const cache=memoizedCreateCacheWithContainer(document.head);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C,{value:cache,children:children})}StyleProvider.displayName="StyleProvider",__webpack_exports__.Z=StyleProvider;try{StyleProvider.displayName="StyleProvider",StyleProvider.__docgenInfo={description:"",displayName:"StyleProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},document:{defaultValue:null,description:"Current document.",name:"document",required:!0,type:{name:"Document"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/style-provider/index.tsx#StyleProvider"]={docgenInfo:StyleProvider.__docgenInfo,name:"StyleProvider",path:"packages/components/src/style-provider/index.tsx#StyleProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);