(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),b=n("8Aig"),s=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},O=n("gnlW"),f=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,k=n("MfeC");function C(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},o)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,w=i.description,C=i.status,D=i.source,W=i.additionalContributors,z=void 0===W?[]:W,B=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:O.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:w}),r.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),w))),null!=B?r.a.createElement(S,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,C||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(g.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(j.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},yHQG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pack [[<@scope>/]<pkg>...]\n")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"pack-destination")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "."'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"Directory in which ",Object(l.b)("inlineCode",{parentName:"p"},"npm pack")," will save tarballs."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"For anything that's installable (that is, a package folder, tarball,\ntarball url, git url, name@tag, name@version, name, or scoped name), this\ncommand will fetch it to the cache, copy the tarball to the current working\ndirectory as ",Object(l.b)("inlineCode",{parentName:"p"},"<name>-<version>.tgz"),", and then write the filenames out to\nstdout."),Object(l.b)("p",null,"If the same package is specified multiple times, then the file will be\noverwritten the second time."),Object(l.b)("p",null,"If no arguments are supplied, then npm packs the current package folder."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://npm.im/npm-packlist"},"npm-packlist package")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-cache"},"npm cache")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-pack-md-8685d003c64a32a70127.js.map