function zGridObject(){return{init:function(a,b){this.el=z(a);this.name=a;this.cfg=b;this.el.className="zGrid";var d="";this.cols=b.header.length;for(var e=0;e<this.cols;e++)d+="<th"+(b.header[e][1]?" width="+b.header[e][1]:"")+">"+b.header[e][0]+"</th>";this.el.innerHTML="<div class=header><div><table cellspacing=0><tr>"+d+'</tr></table></div></div><div style="overflow-x:hidden;overflow-y:auto;"><table cellspacing="0"></table></div>';this.data=this.el.lastChild.firstChild;this.datadiv=this.el.lastChild;
this.data.style.width=b.width+"px";this.el.firstChild.style.height="22px";this.el.firstChild.style.width=b.width-1+"px";this.datadiv.style.height=b.height-23+"px";this.datadiv.style.width=b.width-1+"px";if("sxdGrid1"==this.name)this.oldtime="",this.add=this.addLog;else{var c=this;this.selected=null;this.add=function(a){if("object"==typeof a[0])for(var b in a)this.addRow(a[b]);else this.addRow(a)};this.datadiv.onclick=function(){c.selected.className="";c.selected=null}}},addLog:function(a,b,d){for(var e,
c,f=0;f<b.length;f++)e=this.data.insertRow(-1),c=e.insertCell(-1),e=e.insertCell(-1),c.width=120,f||(c.innerHTML=this.oldtime!=a?a:" ",this.oldtime=a),e.className="wrap",e.innerHTML=b[f]||" ",d&&(e.style.color=d);this.datadiv.scrollTop=this.datadiv.scrollHeight},addRow:function(a){var b=this.data.insertRow(-1),d;"sxdGrid2"==this.name&&(a[5]=sxd.formatSize(a[5],2));for(var e=0;e<this.cols;e++)d=b.insertCell(-1),this.cfg.header[e][1]&&(d.width=this.cfg.header[e][1]),1==this.cfg.header[e][2]&&(d.style.textAlign=
"right"),d.innerHTML=a[e]||" ",d.title=a[e]||"",0==e&&"sxdGrid2"==this.name&&(d.title+="\n"+a[7]);b.file=a[this.cols];var c=this;b.onclick=function(a){a=a||window.event;c.selected&&(c.selected.className="");this.className="sel";c.selected=this;a.stopPropagation&&a.stopPropagation();a.cancelBubble=!0};b.ondblclick=function(a){a=a||window.event;c.selected&&(c.selected.className="");this.className="sel";c.selected=this;sxd.runFiles("open");a.stopPropagation&&a.stopPropagation();a.cancelBubble=!0}},clear:function(){for(var a=
0,b=this.data.rows.length;a<b;a++)this.data.deleteRow(0);this.oldtime=""}}}
function zProgressObject(){return{init:function(a,b){this.el=z(a);this.name=a;this.type=b;this.el.className="zProc "+(2==b?"blue":"green");this.el.innerHTML="<div class=bot><div class=txt>0%</div></div><div class=top><div class=txt>0%</div></div>";this.txt1=this.el.firstChild.firstChild;this.txt2=this.el.lastChild.firstChild;this.top=this.el.lastChild},set:function(a,b,d,e){a=0<a?100<a?100:a:0;b=b||0;d=d||0;e=e||0;this.txt1.innerHTML=a+"%"+(b?" "+sxd.formatSize(b):"")+(d&&e?" ["+d+"/"+e+"]":"");this.txt2.innerHTML=
this.txt1.innerHTML;2==this.type&&(document.title=a+"% - "+sxd.version.full);this.top.style.width=Math.round(3*a)+"px"}}}
function zToolbarObject(){return{init:function(a,b){this.el=z(a);this.name=a;this.id="#"+a;this.el.className="zTBar";this.buttons=b;this.curBtn={id:0,more:0,pop:0,el:null,com:null};var d=this;this.el.onmouseover=function(a){!d.curBtn.pop&&d.getId(a||window.event)&&(d.curBtn.el.className="btn ovr")};this.el.onmouseout=function(a){!d.curBtn.pop&&d.getId(a||window.event)&&(d.curBtn.el.className="btn")};this.el.onmousedown=function(a){a=a||window.event;!d.curBtn.pop&&d.getId(a||window.event)&&(d.curBtn.el.className=
d.curBtn.more?"btn ovr":"btn dwn",d.curBtn.more&&(d.curBtn.el.lastChild.className="arr dwn",d.curBtn.pop=1,sxd.showMenu(d.curBtn,sxd.options["sj_"+d.curBtn.com],{width:220,runjob:!0}),document.body.onclick=function(){d.curBtn.el.className="btn";d.curBtn.el.lastChild.className="arr";d.curBtn.pop=0;document.body.onclick=null},a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0))};this.el.onmouseup=function(a){!d.curBtn.pop&&d.getId(a||window.event)&&(d.curBtn.el.className="btn ovr",d.curBtn.more&&
(d.curBtn.el.lastChild.className="arr"),sxd.actions["tab_"+d.curBtn.com](d.curBtn.more))};var e={".btn.ovr":"0 -28px",".ovr .lb":"0 -72px",".ovr .rb":"-4px -72px",".ovr .mb":"0 -138px",".btn.dwn":"0 -94px",".dwn .lb":"0 -116px",".dwn .rb":"-4px -116px",".dwn .mb":"-4px -138px",".dwn.arr":"0 -94px",".dwn.arr .mb":"-4px -50px"},c;for(c in e)sxd.css.add(".zTBar "+c+" {background-position:"+e[c]+";}");var f="",h;for(h in b)e=b[h],"|"==e[0]?f+='<div class="spl"></div>':(c=' style="background-position:-16px '+
-16*(e[2]-1)+'px;"',f+='<div class="btn" id="ztbi_'+h+'"><div class="lb"></div>',f+=e[3]&1?'<div class="txt"'+c+">"+e[1]+"</div>":'<div class="ico" title="'+e[1]+'"'+c+"></div>",f+=e[3]&2?'<div class="arr"><div class="mb"></div><div class="more"></div><div class="rb"></div></div>':'<div class="rb"></div>',f+="</div>");this.el.innerHTML=f;30<this.el.lastChild.offsetTop&&(e=this.el.lastChild.childNodes[1],e.className="ico",e.title=e.innerHTML,e.innerHTML="")},getId:function(a){a=a.target||a.srcElement;
for(var b={id:0,more:0,pop:0,el:null,com:null};!a.id;)a.className.match(/arr/)&&(b.more=1),a=a.parentNode;return a.id&&"zTBar"!=a.className?(b.id=1*a.id.replace("ztbi_",""),b.el=a,b.com=this.buttons[b.id][0],this.curBtn=b,!0):!1}}}
function zTreeObject(){return{init:function(a,b){this.el=z(a);this.name=a;this.prefix="zti_"+b+"_";this.id="#"+a;this.index=[];this.data=[];this.load=!0;this.err=!1;var d=this;this.el.className="zTree";this.el.onselectstart=function(){return!1};this.el.onclick=function(a){a=a||window.event;var b=a.target||a.srcElement;switch(b.tagName.toUpperCase()){case "I":"pm"==b.className?d.openBranch(d.getId(b)):b.className.match(/^cb[0124]$/)&&d.clickBranch(d.getId(b));break;case "A":d.clickBranch(d.getId(b)),
a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0}"A"==b.parentNode.tagName.toUpperCase()&&d.clickBranch(d.getId(b));return!1};this.el.onmousedown=function(a){a=a||window.event;a=a.target||a.srcElement;if("A"==a.tagName.toUpperCase()||"A"==a.parentNode.tagName.toUpperCase())return!1};var e="li.df > div;li.dt > div;li.dl > div;.close .pm;.pm;.cb0;.cb1;.cb2;.cb3;.cb4".split(";"),c;for(c in e)sxd.css.add(".zTree "+e[c]+" {background-position: 0 -"+18*c+"px;}");e=".cTA .cVI .cPR .cFU .cTR .cEV .iTA .iVI .iPR .iFU .iTR .iEV".split(" ");
for(c in e)sxd.css.add(".zTree "+e[c]+" {background-position: 0 -"+16*c+"px;}")},getId:function(a){for(;!a.parentNode.id&&(a=a.parentNode););return 1*a.parentNode.id.replace(this.prefix,"")},openBranch:function(a){a=this.index[a];a.open=(a.open+1)%2;sxd.css.swap(a.el,["close","open"],a.open)},clickBranch:function(a){if("lite"==sxd.version.type&&"restore_tree"==this.name)return alert(sxd.lng("pro")),!1;var b=this.index[a];if(3==b.checked)return!1;this.setCheckBox(a,4==b.checked?1:(b.checked+1)%(b.type.match(/^.TA$/)?
3:2));this.changeChilds(b);this.checkParents(b)},setCheckBox:function(a,b){b=2==this.index[a].typen&&1==b&&void 0==this.index[a].size?2:b;this.index[a].checked=b;this.index[a].el.firstChild.childNodes[1].className="cb"+b},changeChilds:function(a){if(a.childs)for(var b in a.childs)this.setCheckBox(a.childs[b].id,a.checked),this.changeChilds(a.childs[b])},checkParents:function(a){for(var b;0<a.pid;){a=this.index[a.pid];b=-1;for(var d in a.childs){if(0<=b&&b!=a.childs[d].checked){b=4;break}b=a.childs[d].checked}this.setCheckBox(a.id,
b)}1==a.id&&this.recountSizes(a)},drawTree:function(a){this.load=this.err=!1;if("object"!=typeof a)return!1;for(var b=[""],d=[],e=" cTA iTA cVI iVI cPR iPR cFU iFU cTR iTR cEV iEV".split(" "),c=0,f=a.length;c<f;c++)o={},o.id=a[c][0],o.pid=a[c][1],o.parent=b[o.pid],o.name=a[c][2],o.type=e[a[c][3]],o.typen=a[c][3],o.checked=a[c][4]||0,3>a[c][3]&&(o.size=2==a[c][3]?a[c][5]:0),a[c][3]&1&&(o.childs=[],o.open=a[c][5]||0),b[o.id]=o,0<o.pid?b[o.pid].childs.push(o):d.push(o);this.lastId=0;this.el.innerHTML=
this.drawChilds(d,0);c=1;for(f=b.length;c<f;c++)b[c]&&(o=z(this.prefix+b[c].id),b[c].el=o);this.data=d;this.index=b},recountSizes:function(a){if(!a.childs)return 0;var b=0,d;for(d in a.childs)b+=this.recountSizes(a.childs[d]),"iTA"==a.childs[d].type&&1==a.childs[d].checked&&(b+=a.childs[d].size||0);a.el.getElementsByTagName("span")[0].innerHTML=sxd.formatSize(b,0);return b},drawChilds:function(a,b){if(0==a.length)return"";for(var d="<ul>",e,c,f,h,k,g,l=0,m=a.length,n=-1,p=0,q=0;q<m;q++)g=a[q],g.childs&&
0<g.childs.length?(c="pm",k=this.drawChilds(g.childs,g.id)):(0==b&&(g.checked=3),c=k=""),n=0<=n&&n!=g.checked?4:g.checked,++l,e=m==l?"dl":"dt",f="cb"+g.checked,h=g.type||"iTA",!g.size||1!=g.checked&&4!=g.checked||(p+=g.size),d+='<li class="'+e+(g.open?" open":" close")+'" id="'+this.prefix+g.id+'"><div><i class="'+c+'"></i><i class="'+f+'"></i><a href="#"><i class='+h+"></i> "+g.name+sxd.formatSize(g.size,1)+" </a></div>"+k+"</li>";0<g.pid&&(g.parent.checked=n,0<p&&(g.parent.size+=p));return d+"</ul>"},
save:function(){if(this.err)return null;for(var a=this.data,b={TA:[],TC:[],VI:[],PR:[],FU:[],TR:[],EV:[]},d,e,c,f=0,h=a.length;f<h;f++)if(d=a[f],4==d.checked)for(var k=0,g=d.childs.length;k<g;k++)if(e=d.childs[k],4==e.checked)for(var l=0,m=e.childs.length;l<m;l++)c=e.childs[l],1==c.checked?b.TA.push(c.name):2==c.checked&&b.TC.push(c.name);else 1==e.checked?b[e.type.substr(1,2)].push(e.name):2==e.checked&&b.TC.push(e.name);else 1==d.checked?b[d.type.substr(1,2)].push("*"):2==d.checked&&b.TC.push("*");
return b},pref:function(){for(var a=this.data,b="",d,e,c,f=0,h=a.length;f<h;f++){d=a[f];for(var k=0,g=d.childs.length;k<g;k++){e=d.childs[k];if(4==e.checked)for(var l=0,m=e.childs.length;l<m;l++){if(c=e.childs[l],1==c.checked||2==c.checked){b=c.name.replace(/^([a-z\d]{1,6}_).+?$/,"$1");break}}else if(1==e.checked||2==e.checked){b=e.name.replace(/^([a-z\d]{1,6}_).+?$/,"$1");break}if(b)break}if(b)break}return b},error:function(a){this.err=!0;this.el.innerHTML="<div class=error><div>"+(a||"Empty")+"</div></div>"}}}
function z(a){return document.getElementById(a)}
var sxd={version:{num:20008,type:"pro",full:""},init:function(){var a={" .lb":"0 -80px"," .rb":"-2px -80px"," .mb":"-4px -80px",".ovr":"0 -20px",".ovr .lb":"0 -100px",".ovr .rb":"-2px -100px",".ovr .mb":"-4px -100px",".ovr .arr":"0 -40px",".dwn":"0 -20px",".dwn .lb":"0 -100px",".dwn .rb":"-2px -120px",".dwn .mb":"-4px -120px",".dwn .arr":"0 -60px"},b;for(b in a)this.css.add(".zSel"+b+" {background-position:"+a[b]+";}");this.version.full=z("header").innerHTML;this.main=z("main_div");this.menu.el=z("sxdMenu");
this.name=z("name").lastChild;this.loading=z("loading");this.overlay=z("overlay");this.progress.current=zProgressObject();this.progress.current.init("sxdProc1",1);this.progress.total=zProgressObject();this.progress.total.init("sxdProc2",2);this.tbar=zToolbarObject();this.tree.backup=zTreeObject();this.tree.backup.init("backup_tree",1);this.tree.restore=zTreeObject();this.tree.restore.init("restore_tree",2);this.tree.services=zTreeObject();this.tree.services.init("services_tree",3);this.comment.backup=
z("backup_comment");this.comment.restore=z("restore_comment");this.timer.t1=z("sxdTime1");this.timer.t2=z("sxdTime2");this.timeout=null;this.log=zGridObject();this.log.init("sxdGrid1",{header:[[this.lng("dt"),120],[this.lng("action")]],width:565,height:286});this.files=zGridObject();this.files.init("sxdGrid2",{header:[[this.lng("db"),90],[this.lng("dt"),90],[this.lng("type"),30],[this.lng("tab"),30,1,this.lng("table")],[this.lng("records"),60,1],[this.lng("size"),45,1],[this.lng("comment")]],width:565,
height:334});this.result=zGridObject();this.result.init("sxdGrid3",{header:[["Table",160],["Op",70],["Msg_type",50],["Msg_text"]],width:565,height:334});this.addDialogs(["connect","createdb","savejob","charsets"]);this.addTabs("backup restore log result files services options".split(" "));this.addOpt({services:{g_convert:this.lng("btn_chc"),f_correct:this.lng("btn_coc"),e_enable_keys:this.lng("btn_enable"),d_disable_keys:this.lng("btn_disable"),c_truncate:this.lng("btn_truncate"),b_drop_tab:this.lng("btn_drop"),
a_drop_db:this.lng("btn_drop_db")}})},job:{name:"abcdefgh",stop:0,log_seek:0,type:""},menu:{el:null,type:"zSelMenu"},tabs:{},openTab:function(a){this.opened&&(this.tabs[this.opened].el.style.display="none");this.opened=a;this.name.innerHTML=this.tabs[a].name;this.tabs[a].el.style.display="";document.title=sxd.version.full},addTabs:function(a){for(var b=0,d=a.length;b<d;b++)this.tabs[a[b]]={name:this.lng(a[b]),el:z("tab_"+a[b])};this.openTab(a[0])},dialogs:{},addDialogs:function(a){for(var b=0,d=a.length;b<
d;b++)this.dialogs[a[b]]=z("dia_"+a[b])},tbar:{},tree:{},options:{},progress:{},combos:{},comment:{},lng:function(a){return sxdlng[a]?sxdlng[a]:"[LNG: "+a+"]"},timer:{set:function(a,b,d){function e(a){return(10>Math.floor(a/60)?"0"+Math.floor(a/60):Math.floor(a/60))+":"+(10>a%60?"0"+a%60:a%60)}a||b?(a=b-a,this.t1.innerHTML=e(a),this.t2.innerHTML=e(0<a&&0<d?Math.round(a/(d/100)-a):0)):(this.t1.innerHTML="00:00",this.t2.innerHTML="00:00")}},actions:{db:function(){this.value&&("backup_db"!=this.name&&
"services_db"!=this.name||sxd.ajax("index",sxd.lng("load"),{act:"load_db",name:this.name,value:this.value}))},dblist:function(){sxd.ajax("index",sxd.lng("load"),{act:"dblist"})},filelist:function(){sxd.ajax("index",sxd.lng("load"),{act:"filelist"})},files:function(){this.value&&sxd.ajax("index",sxd.lng("load"),{act:"load_files",name:this.name,value:this.value})},tab_connects:function(){sxd.ajax("index",sxd.lng("load"),{act:"load_connect"});sxd.showDialog("connect")},tab_createdb:function(){sxd.showDialog("createdb")},
tab_backup:function(){sxd.openTab("backup");sxd.tree.backup.load&&sxd.combos.backup_db.action()},tab_restore:function(){sxd.openTab("restore");sxd.tree.restore.load&&sxd.combos.restore_file.action()},tab_files:function(){sxd.ajax("index",sxd.lng("load"),{act:"load_files_ext"});sxd.openTab("files")},tab_services:function(){sxd.openTab("services");sxd.tree.services.load&&sxd.combos.services_db.action()},tab_options:function(){sxd.ajax("index",sxd.lng("load"),{act:"load_options"});sxd.openTab("options")},
tab_exit:function(){sxd.ajax("index",sxd.lng("load"),{act:"exit"})}},informer:function(){sxd.job.timer&&clearTimeout(sxd.job.timer);sxd.job.stop||(sxd.job.timer=setTimeout(function(){sxd.ajax("info",sxd.lng("run"),{job:sxd.job.name,act:"info",lseek:sxd.job.log_seek},1,function(){sxd.informer()})},250))},addDb:function(){sxd.ajax("index",this.lng("sdb"),{act:"add_db",name:z("db_name").value,charset:this.combos.db_charset.value,collate:this.combos.db_charset_col.value});sxd.hideDialog("createdb")},
changeCS:function(){this.result.clear();sxd.hideDialog("charsets");this.openTab("result");sxd.ajax("index",this.lng("run"),{act:"services",type:this.serv_type,db:this.combos.services_db.value,charset:this.combos.services_charset.value,collate:this.combos.services_charset_col.value,obj:this.tree.services.save()})},getPrefix:function(){z("prefix").checked&&""==z("prefix_from").value&&(z("prefix_from").value=this.tree.restore.pref())},saveConnect:function(){sxd.ajax("index",this.lng("sc"),{act:"save_connect",
host:z("con_host").value,port:z("con_port").value,user:z("con_user").value,pass:z("con_pass").changed?z("con_pass").value:null,comp:z("con_comp").checked?"1":"0",db:z("con_db").value});sxd.hideDialog("connect");z("con_pass").value=""},job2php:function(){return"restore"==sxd.opened||"restore"==sxd.job.type?{act:"restore",type:"restore",db:this.combos.restore_db.value,charset:this.combos.restore_charset.value,file:this.combos.restore_file.value,strategy:this.combos.restore_type.value,correct:z("correct").checked?
1:0,autoinc:z("autoinc").checked?1:0,prefix_from:z("prefix_from").value,prefix_to:z("prefix_to").value,savesql:sxd.savesql,obj:this.tree.restore.save()}:{act:"backup",type:"backup",db:this.combos.backup_db.value,charset:this.combos.backup_charset.value,zip:this.combos.backup_zip.value,comment:this.comment.backup.value,del_time:z("del_time").value,del_count:z("del_count").value,outfile:z("outfile").checked?1:0,obj:this.tree.backup.save()}},saveJob:function(){var a=this.job2php();a.job=z("sj_name").value;
a.act="save_job";a.title=z("sj_title").value;sxd.ajax("index",this.lng("sj"),a);sxd.hideDialog("savejob")},runSavedJob:function(a,b){0!=b&&(this.clearLogTab(),sxd.job.name=b,sxd.job.type=a,sxd.job.act="run_savedjob",sxd.ajax("index",this.lng("run"),{act:"run_savedjob",type:a,job:b},1),this.openTab("log"),z("btn_resume").style.display="none",z("btn_pause").style.display="",z("btn_stop").disabled=!1,z("btn_pause").disabled=!1,z("btn_again").disabled=!0,sxd.job.stop=0,sxd.informer())},saveOptions:function(){sxd.confirms=
1*z("conf_import").checked+2*z("conf_file").checked+4*z("conf_db").checked+8*z("conf_truncate").checked+16*z("conf_drop").checked;sxd.ajax("index",this.lng("so"),{act:"save_options",time_web:1*z("time_web").value,time_cron:1*z("time_cron").value,backup_path:z("backup_path").value,backup_url:z("backup_url").value,globstat:z("globstat").checked?"1":"0",outfile_path:z("outfile_path").value,outfile_size:z("outfile_size").value,charsets:z("charsets").value,only_create:z("only_create").value,auth:z("auth").value,
confirm:sxd.confirms});sxd.hideDialog("connect");z("con_pass").value=""},clearLogTab:function(){this.log.clear();this.timer.set(0);this.job.log_seek=0;this.progress.current.set(0);this.progress.total.set(0)},runBackup:function(){this.clearLogTab();z("btn_resume").style.display="none";z("btn_pause").style.display="";z("btn_down").style.display="none";z("btn_stop").disabled=!1;z("btn_pause").disabled=!1;z("btn_again").disabled=!0;sxd.job.name=this.newJob();sxd.job.type="backup";var a=this.job2php();
this.openTab("log");a.type="run";a.job=sxd.job.name;this.ajax("index",this.lng("run"),a,1);sxd.job.stop=0;sxd.informer()},stopJob:function(){z("btn_again").disabled=!1;z("btn_stop").disabled=!0;z("btn_pause").disabled=!0;sxd.ajax("info",this.lng("run"),{job:sxd.job.name,act:"stop"},1)},pauseJob:function(){z("btn_again").disabled=!1;z("btn_stop").disabled=!0;z("btn_pause").disabled=!0;sxd.ajax("info",this.lng("run"),{job:sxd.job.name,act:"pause"},1);z("btn_resume").style.display="";z("btn_pause").style.display=
"none"},resumeJob:function(){z("btn_stop").disabled=!1;z("btn_pause").disabled=!1;z("btn_again").disabled=!0;sxd.ajax("index",this.lng("run"),{job:sxd.job.name,act:"resume"},1);z("btn_resume").style.display="none";z("btn_pause").style.display="";sxd.job.stop=0;sxd.informer()},runAgain:function(){"run_savedjob"==sxd.job.act?sxd.runSavedJob(sxd.job.type,sxd.job.name):"backup"==sxd.job.type?sxd.runBackup():"restore"==sxd.job.type&&sxd.runRestore(2)},runRestore:function(a){a=a||0;sxd.confirms&1&&!confirm(sxd.lng("fic"))||
(this.clearLogTab(),z("btn_resume").style.display="none",z("btn_pause").style.display="",z("btn_down").style.display="none",z("btn_stop").disabled=!1,z("btn_pause").disabled=!1,z("btn_again").disabled=!0,sxd.job.name=this.newJob(),sxd.job.type="restore",sxd.savesql=1==a?1:2==a?sxd.savesql:0,a=this.job2php(),this.openTab("log"),a.type="run",a.job=sxd.job.name,this.ajax("index",this.lng("run"),a,1),sxd.job.stop=0,sxd.informer())},runServices:function(a){this.serv_type=a=a.replace(/^[a-g]_/,"");switch(a){case "delete":case "drop_db":if(sxd.confirms&
4&&!confirm(sxd.lng("ddc")))return;sxd.ajax("index",sxd.lng("run"),{act:"delete_db",name:this.combos.services_db.value});return;case "convert":z("cc_header").innerHTML=sxd.lng("chc_header");z("charset_hint").innerHTML=sxd.lng("hint_chc")+"<br>"+sxd.lng("need_backup");sxd.showDialog("charsets");return;case "correct":z("cc_header").innerHTML=sxd.lng("coc_header");z("charset_hint").innerHTML=sxd.lng("hint_coc")+"<br>"+sxd.lng("need_backup");sxd.showDialog("charsets");return;case "truncate":if(sxd.confirms&
8&&!confirm(sxd.lng("ttc")))return;break;case "drop_tab":if(sxd.confirms&16&&!confirm(sxd.lng("tdc")))return}this.result.clear();this.openTab("result");this.ajax("index",this.lng("run"),{act:"services",type:a,db:this.combos.services_db.value,check:this.combos.services_check.value,repair:this.combos.services_repair.value,obj:this.tree.services.save()})},runFiles:function(a,b){b=b||this.files.selected.file;switch(a){case "open":sxd.combos.restore_file.select(b);sxd.openTab("restore");break;case "download":location.href=
sxd.backupUrl+b;break;case "delete":if(!b)break;if(sxd.confirms&2&&!confirm(sxd.lng("fdc")))break;sxd.ajax("index",sxd.lng("run"),{act:"delete_file",name:b});sxd.actions.filelist()}},ajax:function(a,b,d,e,c){function f(a,b){var c="";b=b||"";for(var d in a)c+="object"==typeof a[d]?f(a[d],b+"["+d+"]"):"ajax"+b+"["+d+"]="+encodeURIComponent(a[d])+"&";return c}this.showLoading(b);a+=".php";b=f(d);var h=window.XMLHttpRequest?new XMLHttpRequest:window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):
null;h.open("POST",a,!0);h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var k=this,g=setInterval(function(){h&&4==h.readyState&&(200==h.status&&eval(h.responseText),c&&c(),h=null,clearInterval(g),g=null,e||k.hideLoading())},33);h.send(b)},css:{add:function(a,b){var d=document.styleSheets[0];b||(b=d.cssRules?d.cssRules.length:d.rules.length);d.addRule?/^([^{]+)\{(.*)\}\s*$/.test(a)&&d.addRule(RegExp.$1,RegExp.$2,b):d.insertRule(a,b)},swap:function(a,b,d){var e=a.className.split(/\s+/),
c;for(c in e)for(var f in b)if(e[c]==b[f]){e[c]=b[d];break}a.className=e.join(" ")}},showDialog:function(a){this.overlay.style.display="block";a=this.dialogs[a];a.style.display="block";a.style.marginTop="-"+Math.round(a.clientHeight/2-2)+"px";a.getElementsByTagName("input")[0].focus()},hideDialog:function(a){this.dialogs[a].style.display="none";this.overlay.style.display="none"},addCombo:function(a,b,d,e){this.combos[a]={ico:d||0,el:z(a)};var c=this.combos[a];"object"==typeof e?e=this.addOpt(e):(d=
/^(\w+):(\w+)$/.exec(e))?(b={},b[e]=0<this.combos[d[2]].options.length?this.combos[d[2]].options[this.combos[d[2]].sel].opts:[],b=this.addOpt(b,1),this.combos[d[2]].child=c):(d={},d[e]={},e=this.addOpt(d));c.options=this.options[e];c.optName=e;c.name=a;c.parent=this;c.el.className="zSel";c.el.innerHTML='<div class="lb"></div><div class="txt" style="background-position:-16px '+-16*(c.ico-1)+'px;"></div><div class="arr"><div class="mb"></div><div class="more"></div><div class="rb"></div></div>';c.action=
function(){};c.select=function(a,b){this.sel*=1;if(void 0==this.options)return!1;if("+"==a)this.sel+=this.sel<this.options.length-1?1:0;else if("-"==a)this.sel-=0<this.sel?1:0;else{this.sel=0;for(var c in this.options)if(this.options[c].value==a){this.sel=c;break}}b&&(this.parent.menu.el.style.display="none",document.body.onclick=null);this.value=this.options[this.sel]?this.options[this.sel].value:0;this.text=this.options[this.sel]?this.options[this.sel].text:"";this.el.childNodes[1].innerHTML=this.text;
this.child&&(this.parent.clearOpt(this.child.optName),c={},c[this.child.optName]=this.options[this.sel].opts,this.child.select(this.parent.addOpt(c,1),0));var d=this;b?(clearTimeout(sxd.timeout),sxd.timeout=setTimeout(function(){d.action()},500)):this.action()};c.select(b,0);c.action=this.actions[e]||function(){};c.show=function(){c.el.disabled||f.showMenu(c,c.options,{})};var f=this;c.el.onmouseover=function(a){c.el.disabled||(c.el.className="zSel ovr")};c.el.onmousewheel=function(a){a=a||window.event;
a=0<a.wheelDelta?"-":"+";c.el.disabled||c.select(a,1)};c.el.addEventListener&&c.el.addEventListener("DOMMouseScroll",function(a){a.wheelDelta=-a.detail;c.el.onmousewheel(a)},!1);c.el.onmouseout=function(a){c.el.className="zSel"};c.el.onmousedown=function(a){a=a||window.event;c.el.disabled||("none"!=f.menu.el.style.display&&f.menu.el.obj.name==c.name?(f.menu.el.style.display="none",c.el.className="zSel ovr"):(c.el.className="zSel dwn",c.show()));a.stopPropagation&&a.stopPropagation();a.cancelBubble=
!0}},addOpt:function(a,b){b=b||0;var d="",e;for(e in a){this.options[e]||(this.options[e]=[]);for(var c in a[e])"object"==typeof a[e][c]?this.options[e].push({text:c,value:1*c==c?1*c:c,opts:a[e][c]}):(b&&a[e][c]&&(d=c),this.options[e].push({text:b?c:a[e][c],value:1*c==c?1*c:c}));this.options[e]=this.options[e].sort(this.keyNatSort)}return b?d:e},clearOpt:function(a){if(a)this.options[a]&&(this.options[a].length=0);else for(var b in this.options)this.options[b].length=0},showMenu:function(a,b,d){var e=
"",c=this.menu.el;c.className="zSelMenu";c.innerHTML='<div style="width:100%;"></div>';for(var f in b)e=document.createElement("DIV"),e.innerHTML=b[f].text,e.title=e.firstChild.nodeValue||"",f==a.sel&&(e.className="ovr",c.over=e),e.value=b[f].value,e.onmouseover=function(){c.over&&(c.over.className="");this.className="ovr";c.over=this},e.onmousedown=function(){d.runjob?sxd.runSavedJob(c.obj.com,this.value):2==d.btn?sxd.runServices(this.value):c.obj.select(this.value,0);c.style.display="none"},c.firstChild.appendChild(e);
c.style.display="block";b=this.offset(a.el);c.style.width=(d.width?d.width:a.el.offsetWidth-4)+"px";e=260>c.firstChild.offsetHeight?c.firstChild.offsetHeight:260;c.style.height=e+"px";c.style.top=b.top-(d.btn?e+a.el.offsetHeight+2:0)+"px";c.style.left=b.left+"px";c.scrollTop=c.over?c.over.offsetTop:0;c.obj=a;c.onmousedown=function(a){a=a||window.event;a.stopPropagation&&a.stopPropagation();a.cancelBubble=!0};document.body.onmousedown=function(){c.style.display="none";document.body.onclick=null}},
offset:function(a){for(var b=a.offsetTop+a.offsetHeight+1,d=a.offsetLeft+2;a=a.offsetParent;)b+=a.offsetTop-a.scrollTop,d+=a.offsetLeft-a.scrollLeft;return{top:b,left:d}},keyNatSort:function(a,b){var d,e;a=a.value;for(b=b.value;(d=/^(\D+|(\d+))(.*?)$/.exec(a))&&(e=/^(\D+|(\d+))(.*?)$/.exec(b));){if(d[2]&&e[2]&&d[2]!=e[2])return 1*d[2]>1*e[2]?1:-1;if(d[1]&&e[1]&&d[1]!=e[1])return d[1]>e[1]?1:-1;if(d[3]&&e[3]&&d[3]!=e[3])a=d[3],b=e[3];else return 0}},formatSize:function(a,b){b=b||0;if(0<=a){for(var d=
0;999<a&&(a/=1024);)d++;a=(0<d?a.toPrecision(3):a)+" "+sxdlng.sizes[d];return 2==b?a:1==b?" <span>[ "+a+" ]</span>":"[ "+a+" ]"}return""},showLoading:function(a){this.loading.innerHTML=a;this.loading.style.visibility="visible"},hideLoading:function(){this.loading.style.visibility="hidden";sxd.job.stop=1;z("btn_stop").disabled=!0;z("btn_pause").disabled=!0;z("btn_again").disabled=!1},newJob:function(){for(var a="",b=0;8>b;b++)a+="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890".charAt(Math.round(61*
Math.random()));return a}};