"use strict";(self.webpackChunkadobe_io_runtime=self.webpackChunkadobe_io_runtime||[]).push([[1199],{44602:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return h}});var o=n(87462),a=n(63366),i=(n(15007),n(64983)),s=n(91515),r=["components"],c={},u={_frontmatter:c},d=s.Z;function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.mdx)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"securing-web-actions"},"Securing Web Actions"),(0,i.mdx)("p",null,"By default, a web action can be invoked by anyone knowing the action","’","s URL. If you want to restrict the access, you either use Basic Authentication or you build your own authentication layer."),(0,i.mdx)("p",null,"Here is how you can enable Basic Authentication for a web action:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// create a web action with Basic Authentication on\nwsk action create my-secure-web-action main.js --web true --web-secure this-is-the-secret-hash\n")),(0,i.mdx)("p",null,"or"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// update an existing web action to enable Basic Authenticationn or change the secret\nwsk action update my-secure-web-action main.js --web true --web-secure this-is-the-secret-hash\n")),(0,i.mdx)("p",null,"Once you","’","ve enabled Basic Authentication, you","’","ll have to pass ",(0,i.mdx)("em",{parentName:"p"},"X-Require-Wisk-Auth")," header, and the secret you set, when invoking the web action. Assuming that your web action is created in the default package, this is how you","’","ll invoke it:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X GET -H "X-Require-Whisk-Auth: <this-is-the-secret-hash>" https://[your-namespaces].adobeioruntime.net/api/v1/web/default/my-secure-web-action\n')),(0,i.mdx)("p",null,"If you fail in adding the authentication header or the secret is wrong, you will get an error:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "error": "Authentication is possible but has failed or not yet been provided.",\n  "code": "OWGYkWwCUT7Ta6hWpfZWTQqRsfvcFTku"\n}\n')),(0,i.mdx)("h2",{id:"non-web-action"},"Non Web Action"),(0,i.mdx)("p",null,"If your action is not a web action, you can still use your namespace credentials, base64 encoded, to call any of the actions in your namespace, as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'curl -X POST -H "Authorization: Basic <base64-namepsace-auth>" https://[your-namespaces].adobeioruntime.net/api/v1/default/my-secure-action\n')),(0,i.mdx)("h2",{id:"cookies"},"Cookies"),(0,i.mdx)("p",null,"The use of cookies directly from web actions on Runtime is discouraged. The reason for this is that, due to the shared nature of the infrastructure, it is not possible to completely segregate cookies between namespaces. It is okay to use the runtime domain for testing, but any cookie set directly by the runtime domain must be considered compromised."),(0,i.mdx)("p",null,"To alleviate this, you can set up a forwarding proxy with a correct and valid second-level domain and send those requests along to the actual runtime domain. Inside your function, you can then implement an approve list or some shared secret to ensure that people attempting to access the functions directly are denied. Adobe also provides Container Native Applications, which can do much of this work for you."),(0,i.mdx)("p",null,"For a fuller discussion of this topic you can read ",(0,i.mdx)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/cookies-and-herokuapp-com"},"Heroku","’","s discussion of their cookie policy"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-securing-web-actions-md-e73284e5084016a7c685.js.map