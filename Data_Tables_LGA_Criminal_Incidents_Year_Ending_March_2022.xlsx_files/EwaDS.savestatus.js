(window.dullscriptWebpackJsonp=window.dullscriptWebpackJsonp||[]).push([[39],{1465:function(y,C,b){function a(aa){var E=V.call(this)||this;E.Rc=aa;E.Tb();return E}function c(aa,E){var G=this;this.cfe=this.xKc=!1;this.Eya=function(I,R){(null===R||void 0===R?0:R.bH)&&M.a.CKg([R.bH])&&(G.zuc=!0)};this.Fo=function(){G.zuc=!1};this.od=function(I,R){Q.b(R)&&G.xea(!0);G.zuc=!1};this.vd=function(){G.cR=G.$.cR;G.xea()};this.$Af=function(){G.HS()};this.cAf=function(){G.cR=G.$.cR};this.Tyd=function(){ba.g(G.$).Ea.tv(G.Tyd);
G.cR=G.$.cR};this.LUf=E;this.$=aa;this.$.userOperationManager.xq(this.cAf);this.$.dl(this.vd);this.$.ea.jGg(this.$Af);this.$.ea.hk(this.od);this.$.pZb(this.Eya);this.$.ea.XL(this.Fo);this.xea()}function e(){this.iQc=this.jPc=this.jlb=this.tb=null}function f(aa,E,G,I){this.dga=this.Yfa=this.hga=this.gga=null;this.VDa=0;this.UD=this.hQc=this.nCa=this.UEc=this.TEa=null;this.Xd=aa;this.U8=E;this.I1=G;this.kj=I;this.B8d=!0;this.IL=!1;this.gA=3;this.mra=!0}function l(aa,E){this.fs=null;this.gga=CommonUIStrings.l_SavedStatus;
this.hga=CommonUIStrings.l_SavingStatus;this.Yfa=CommonUIStrings.l_ReadOnlyStatus;this.dga=CommonUIStrings.l_ReviewModeStatus;this.OSb=E;this.I1=aa;this.gA=3;this.mra=!0}function n(aa){this.dga=this.Yfa=this.hga=this.gga=null;this.M6d=this.c$d=this.mx=this.IL=!1;this.tPc=this.r$d=null;this.j$d=0;this.wb=this.p$d=null;this.I1=aa;this.gA=3;this.Uib=!0}b.r(C);y=b(0);var m=b(82),h=b(15),x=b(166),u=b(39);n.prototype.initialize=function(aa,E,G){var I=this;this.gga=this.Nfd(aa,E);this.hga=CommonUIStrings.l_SavingStatus;
this.Yfa=CommonUIStrings.l_ReadOnlyStatus;this.dga=CommonUIStrings.l_ReviewModeStatus;this.I1&&this.I1.execute(function(R){R.aVc(Object(m.a)(I,I.kOb,"updateToSavingStatus"))});this.mx=!0;this.wb=G;return!0};n.prototype.xea=function(aa,E){this.IL=aa;this.gA=E;this.HS(this.Uib)};n.prototype.HS=function(aa){!this.Uib&&aa&&(this.p$d=new Date);this.Uib=aa;aa=null;3===this.gA&&(aa=this.Uib?this.gga:this.hga);this.kfh(aa)};n.prototype.Nfd=function(aa,E){return aa?String.format(CommonUIStrings.l_SavedToStatus,
CommonUIStrings.l_OneDriveName):E&&E.length?String.format(CommonUIStrings.l_SavedToStatus,E):CommonUIStrings.l_SavedStatus};n.prototype.kOb=function(){this.HS(!1)};n.prototype.TQh=function(){switch(this.gA){case 1:return this.Yfa;case 2:return this.dga;default:return null}};n.prototype.ufi=function(aa){return this.c$d===this.IL&&this.j$d===this.gA&&this.r$d===aa};n.prototype.i6c=function(aa){var E=this;appChrome.getHeaderApi().then(function(G){G.updateDocumentTitleStatus(E.IL,aa,E.TQh(),E.p$d,E.Uib);
E.M6d=!0;return null});this.tPc=null};n.prototype.kfh=function(aa){var E=this;this.mx&&x.c()&&!this.ufi(aa)&&(!this.M6d&&this.wb.getBooleanFeatureGate("Microsoft.Office.SharedOnline.ExpediteFirstSaveStatusAction",!1)?this.i6c(aa):u.a.GRf()?(this.tPc&&h.ULS.sendTraceTag(595146389,340,50,"Previous UpdateDocumentTitleStatus idle callback can be cancelled."),this.tPc=window.requestIdleCallback(function(){E.i6c(aa)})):window.requestAnimationFrame(function(){E.i6c(aa)}),this.c$d=this.IL,this.r$d=aa,this.j$d=
this.gA)};Object(y.a)(n,"ReactSaveStatusUIHandler",null,[522]);var w=b(169);l.prototype.sv=function(){var aa=this;this.I1&&this.I1.execute(function(E){E.aVc(Object(m.a)(aa,aa.kOb,"updateToSavingStatus"))});this.OSb.execute(function(E){aa.fs=E})};l.prototype.xea=function(aa,E){this.gA=E;3===E?this.HS(this.mra):2===E?this.OWd(this.dga):this.OWd(this.Yfa)};l.prototype.kOb=function(){this.HS(!1)};l.prototype.HS=function(aa){this.mra=aa;this.OWd(this.mra?this.gga:this.hga)};l.prototype.OWd=function(aa){this.fs&&
this.fs.Gj(w.a.lMj,this.$0g(aa))};l.prototype.$0g=function(aa){var E={};E.StatusText=aa;return E};Object(y.a)(l,"SaveStatusPostMessageHandler",null,[522]);var v=b(94),t=b(123),z=b(56);f.prototype.initialize=function(aa,E){if(!this.Xd)return!1;this.gga=this.Nfd(aa,E);this.hga=CommonUIStrings.l_SavingStatus;this.Yfa=CommonUIStrings.l_ReadOnlyStatus;this.dga=CommonUIStrings.l_ReviewModeStatus;this.sv();return!0};f.prototype.Nfd=function(aa,E){return aa?String.format(CommonUIStrings.l_SavedToStatus,CommonUIStrings.l_OneDriveName):
E&&E.length?String.format(CommonUIStrings.l_SavedToStatus,E):CommonUIStrings.l_SavedStatus};f.prototype.sv=function(){var aa=this;this.U8&&this.U8.execute(function(E){E.JFg(Object(m.a)(aa,aa.mEe,"createStatusAndModeElements"));E.AFg(Object(m.a)(aa,aa.nyj,"showHideSaveStatusElement"));E.eJj&&aa.mEe(null,null)});this.I1&&this.I1.execute(function(E){E.aVc(Object(m.a)(aa,aa.kOb,"updateToSavingStatus"))})};f.prototype.Kv=function(){this.UD&&this.Xd&&this.Xd.kG(this.UD)};f.prototype.nyj=function(aa,E){this.xea("true"===
E,this.gA)};f.prototype.xea=function(aa,E){this.IL=aa;this.gA=E;this.UEc&&(this.UEc.style.display=this.IL||3===this.gA||!this.TEa?"none":"");this.nCa&&(this.nCa.style.display=this.IL||3===this.gA?"none":"",this.nCa.innerText=1===this.gA?this.Yfa:this.dga,this.nCa.title=1===this.gA?CommonUIStrings.l_ReadOnlyStatusTooltip:CommonUIStrings.l_ReviewModeStatusTooltip);this.hQc&&(this.hQc.style.display=this.IL||1===this.gA||!this.TEa&&!this.nCa?"none":"");this.UD&&(this.UD.style.display=this.IL||1===this.gA?
"none":"",this.HS(this.mra),this.UD.title=CommonUIStrings.l_SaveStatusTooltip)};f.prototype.mEe=function(aa,E){aa=document.getElementById(v.CuiHelper.J6e);E&&E.uVj||!aa||""===this.gga||""===this.hga||""===this.Yfa||""===this.dga||(this.TEa=document.getElementById(v.CuiHelper.K0b),this.UEc=v.CuiHelper.ota(aa,"BreadcrumbAppModeDash","-",null,!1),this.nCa=v.CuiHelper.ota(aa,"BreadcrumbAppModeStatus",1===this.gA?this.Yfa:this.dga,null,!1),this.Kbg(this.nCa),this.hQc=v.CuiHelper.ota(aa,"BreadcrumbSaveStatusDash",
"-",null,!1),this.UD=v.CuiHelper.ota(aa,"BreadcrumbSaveStatus",this.gga,null,!1),this.Kbg(this.UD),this.xea(this.IL,this.gA))};f.prototype.kOb=function(){this.HS(!1)};f.prototype.HS=function(aa){this.mra=aa;this.hRj(this.mra?this.gga:this.hga)};f.prototype.hRj=function(aa){!this.UD||3!==this.gA&&2!==this.gA||(this.B8d&&!this.mra?(this.VDa=this.UD.offsetWidth<this.VDa?this.VDa:this.UD.offsetWidth,this.lOj(this.hga),this.B8d=!1):this.UD.innerText=aa)};f.prototype.Kbg=function(aa){aa.style.direction=
this.kj?"rtl":"ltr";aa.style.width="auto";aa.style.textAlign=this.kj?"right":"left";aa.style.display=this.IL?"none":"";aa.setAttribute("Unselectable","on")};f.prototype.lOj=function(aa){this.UD&&(this.UD.style.width="",this.UD.innerText=aa,this.VDa=this.UD.offsetWidth<this.VDa?this.VDa:this.UD.offsetWidth,aa=t.a.eB(this.UD),this.UD.style.width=this.VDa-z.a.gD(aa.paddingLeft)-z.a.gD(aa.paddingRight)+1+"px")};Object(y.a)(f,"SaveStatusUIHandler",null,[522]);var D=b(4),A=b(93);e.prototype.fi=function(aa){var E=
this;this.tb=aa;D.AFrameworkApplication.fa.ra("PostMessageEmbedded")&&D.AFrameworkApplication.hideHeaderEmbedded?this.tb.register(l,"Common.App.SaveStatus.SaveStatusPostMessageHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").Hc().Oc(function(){return new l(E.tb.kc("Common.App.HostNotification.EditNotificationEventSource"),E.tb.kc("Postmessage.IHostPostmessenger"))}):D.AFrameworkApplication.sa.Qa.ygf||(D.AFrameworkApplication.sa.Qa.isReactSharedHeaderUxEnabled?this.tb.register(n,"Common.App.SaveStatus.ReactSaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").Hc().Oc(function(){return new n(E.tb.kc("Common.App.HostNotification.EditNotificationEventSource"))}):
this.tb.register(f,"Common.App.SaveStatus.SaveStatusUIHandler").as("Common.App.SaveStatus.ISaveStatusUIHandler").Hc().Oc(function(){return new f(A.EventHandlerManager.instance,E.tb.kc("Common.App.Header.HeaderEventSource"),E.tb.kc("Common.App.HostNotification.EditNotificationEventSource"),D.AFrameworkApplication.isRtl)}))};e.prototype.init=function(){D.AFrameworkApplication.fa.hv(Object(m.a)(this,this.vB,"onFullAppSettingsReady"))};e.prototype.vB=function(){var aa=D.AFrameworkApplication.fa,E=!!D.AFrameworkApplication.sa.Qa&&
4===D.AFrameworkApplication.sa.Qa.Sj;if(aa.ra("WordEditorAutoSaveImprovementIsEnabled")||aa.ra("PptEditorSaveStatusInHeaderEnabled")||E&&aa.ra("SimplifiedReactRibbonUxIsEnabled")||aa.ra("ExcelSaveStatusInHeaderEnabled")||aa.ra("VisioSaveStatusInHeaderEnabled"))D.AFrameworkApplication.fa.ra("PostMessageEmbedded")&&D.AFrameworkApplication.hideHeaderEmbedded?(this.iQc=this.tb.resolve("Common.App.SaveStatus.SaveStatusPostMessageHandler"))&&this.iQc.sv():D.AFrameworkApplication.sa.Qa.ygf||(D.AFrameworkApplication.sa.Qa.isReactSharedHeaderUxEnabled?
(this.jPc=this.tb.resolve("Common.App.SaveStatus.ReactSaveStatusUIHandler"))&&this.jPc.initialize(aa.ra("IsSkyDrive"),aa.Va("HostNameToIncludeInSavedStatus"),D.AFrameworkApplication.fa):(this.jlb=this.tb.resolve("Common.App.SaveStatus.SaveStatusUIHandler"))&&this.jlb.initialize(aa.ra("IsSkyDrive"),aa.Va("HostNameToIncludeInSavedStatus")))};e.prototype.dispose=function(){this.jlb&&this.jlb.Kv()};Ck.Object.defineProperties(e.prototype,{name:{configurable:!0,enumerable:!0,get:function(){return"Common.App.SaveStatus"}}});
Object(y.a)(e,"PackageManager",null,[4,5]);C=b(257);var B=b(11),N=b(84),P=b(229),Q=b(232),M=b(30),ba=b(22);c.prototype.dispose=function(){this.$&&(this.$.yl(this.vd),this.$.Lsc(this.Eya),this.$.userOperationManager&&this.$.userOperationManager.Ul(this.cAf),this.$.ea&&(this.$.ea.ebj(this.$Af),this.$.ea.Dk(this.od),this.$.ea.$R(this.Fo)),ba.g(this.$)&&ba.g(this.$).Ea&&ba.g(this.$).Ea.tv(this.Tyd))};c.prototype.xea=function(aa){aa=!this.$.isEditMode||(void 0===aa?!1:aa);this.LUf.xea(aa,this.$.isEditMode?
3:1);this.HS()};c.prototype.HS=function(){this.$.isEditMode&&this.LUf.HS(!this.cR&&!this.bpi&&!this.zuc)};Ck.Object.defineProperties(c.prototype,{bpi:{configurable:!0,enumerable:!0,get:function(){return this.$.ea?this.$.ea.Uif:!1}},cR:{configurable:!0,enumerable:!0,get:function(){return this.xKc},set:function(aa){aa?this.xKc=!0:ba.g(this.$)&&ba.g(this.$).Ea&&(ba.g(this.$).Ea.$Z()?this.xKc=!1:ba.g(this.$).Ea.yx(this.Tyd));this.HS()}},zuc:{configurable:!0,enumerable:!0,get:function(){return this.cfe},
set:function(aa){this.cfe=aa;this.HS()}}});Object(y.a)(c,"SaveStatusManager",null,[3]);var V=P.a;Wl(a,V);a.prototype.create=function(){var aa=this,E=N.a.instance;E.kc("Common.App.SaveStatus.ISaveStatusUIHandler").execute(function(G){var I=new c(aa.Rc,G);E.register(c,"Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager").Hc().Oc(function(){return I});aa.Eb(E.resolve("Microsoft.Office.Excel.WebUI.Client.SaveStatus.SaveStatusManager"))})};a.ka=function(aa){aa.da.Ga(299,new a(aa))};Object(y.a)(a,
"SaveStatusFactory",P.a,[]);Type.registerNamespace("_Ewa");Type.registerNamespace("Common.App.SaveStatus");C.a.instance.gj(new e);B.a.Fa(a.ka)}}]);

//# sourceMappingURL=https://artifacts.dev.azure.com/office/_apis/symbol/symsrv/EwaDS.savestatus.js.map/f37df17eef29f71092f5ff22732f110c/EwaDS.savestatus.js.map