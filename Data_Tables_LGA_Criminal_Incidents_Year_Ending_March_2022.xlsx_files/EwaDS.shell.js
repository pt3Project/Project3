(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[44],{1474:function(y,C,b){function a(){this.tb=null}function c(v,t){this.JQc=this.IQc=null;this.tXa=new n.a;this.dh=v;this.eFa=t.appSettings[c.gVj]||""}b.r(C);y=b(0);var e=b(612),f=b(82),l=b(15),n=b(162),m=b(4),h=b(41),x=b(80),u=b(974);c.prototype.Udj=function(){var v={};v[c.n3h]=m.AFrameworkApplication.nj;v["Content-Type"]="application/json; charset=utf-8";l.ULS.sendTraceTag(6612806,215,50,"Client is sending a request to get the code for the O365 switcher");
var t=x.a.El(this.eFa+c.Otj,c.IDi,m.AFrameworkApplication.sa.Qa.Sj.toString());this.j3.gm(t,1,"",v,!0,2,Object(f.a)(this,this.TEb,"onSuccessCallback"),Object(f.a)(this,this.cEb,"onFailureCallback"),null,void 0,void 0,void 0,void 0,"20")};c.prototype.Rti=function(v){try{var t={};t.FlightName=v.FlightName;t.SessionID=v.SessionID;l.ULS.sendTraceTag(594883776,215,50,h.c(t))}catch(z){l.ULS.sendTraceTag(594883747,215,10,"Unable to log NavBarData")}};c.prototype.TEb=function(v){if((v=v.data.ke)&&v.length)try{var t=
h.a(v);this.IQc=t.NavBarDataJson;l.ULS.sendTraceTag(41551899,215,50,"Skipping call to TryLoadResources for React Shared Header.");if(this.IQc){var z=h.d(t.NavBarDataJson);this.JQc=z.Wt;z.returnValue?(this.Rti(this.JQc),this.tXa.setResult(this.JQc)):(t={},l.ULS.sendTraceTag(7660113,215,10,"Failed to deserialize : {0}",(t.ShellData=u.a.veb(this.IQc),t)),this.tXa.uu())}else l.ULS.sendTraceTag(9000737,215,15,"ShellData is null"),this.tXa.uu()}catch(D){l.ULS.sendTraceTag(6362370,215,10,"Unable to parse the response from O365ShellServiceProxy."),
this.tXa.uu()}else l.ULS.sendTraceTag(6362369,215,10,"Response from O365ShellServiceProxy is null.")};c.prototype.cEb=function(){this.tXa.uu();l.ULS.sendTraceTag(7608091,215,10,"Call to O365ShellServiceProxy failed.")};c.zub=function(){return new c(new e.a(function(){return m.AFrameworkApplication.Jd}),m.AFrameworkApplication.fa,m.AFrameworkApplication.sa.Qa.Sj)};Ck.Object.defineProperties(c.prototype,{Ntj:{configurable:!0,enumerable:!0,get:function(){return this.tXa.task}},j3:{configurable:!0,enumerable:!0,
get:function(){return this.dh.value}}});Ck.Object.defineProperties(c,{instance:{configurable:!0,enumerable:!0,get:function(){return c.Ma||(c.Ma=c.zub())}}});c.n3h="X-qs";c.IDi="at";c.Otj="O365ShellServiceProxy.ashx";c.Ma=null;c.gVj="ShellWebServiceBase";Object(y.a)(c,"O365ShellActor",null,[484]);var w=b(257);a.prototype.fi=function(v){this.tb=v;this.tb.register(c,"Common.App.O365Shell.O365ShellActor").as("Common.App.O365Shell.IO365ShellActor").Hc().Oc(function(){return new c(new e.a(function(){return m.AFrameworkApplication.Jd}),
m.AFrameworkApplication.fa,m.AFrameworkApplication.sa.Qa.Sj)})};a.prototype.init=function(){m.AFrameworkApplication.fa.hv(Object(f.a)(this,this.vB,"onFullAppSettingsReady"))};a.prototype.vB=function(){m.AFrameworkApplication.useO365ShellService&&m.AFrameworkApplication.sa.Qa.isReactSharedHeaderUxEnabled&&this.tb.resolve("Common.App.O365Shell.O365ShellActor").Udj()};a.prototype.dispose=function(){};a.main=function(){w.a.instance.gj(new a)};Ck.Object.defineProperties(a.prototype,{name:{configurable:!0,
enumerable:!0,get:function(){return"Common.App.O365Shell"}}});Object(y.a)(a,"PackageManager",null,[4,5]);Type.registerNamespace("Common.App.O365Shell");a.main()}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDS.shell.js.map/18d9263ee5341f1a2a894b6852729a1a/EwaDS.shell.js.map