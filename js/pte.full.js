(function(b){function t(j,c,g,e){e={data:e||e===0||e===!1?e:c?c.data:{},_wrap:c?c._wrap:null,tmpl:null,parent:c||null,nodes:[],calls:x,nest:y,wrap:f,html:z,update:a};j&&b.extend(e,j,{nodes:[],parent:c});if(g)e.tmpl=g,e._ctnt=e._ctnt||e.tmpl(b,e),e.key=++s,(o.length?k:i)[s]=e;return e}function r(a,c,g){var e,g=g?b.map(g,function(b){return typeof b==="string"?a.key?b.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+l+'="'+a.key+'" $2'):b:r(b,a,b._ctnt)}):a;if(c)return g;g=g.join("");g.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
function(g,c,a,j){e=b(a).get();n(e);c&&(e=v(c).concat(e));j&&(e=e.concat(v(j)))});return e?e:v(g)}function v(a){var c=document.createElement("div");c.innerHTML=a;return b.makeArray(c.childNodes)}function A(a){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+b.trim(a).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
function(c,g,e,a,j,h,d){c=b.tmpl.tag[e];if(!c)throw"Unknown template tag: "+e;e=c._default||[];h&&!/\w$/.test(j)&&(j+=h,h="");j?(j=u(j),d=d?","+u(d)+")":h?")":"",d=h?j.indexOf(".")>-1?j+u(h):"("+j+").call($item"+d:j,h=h?d:"(typeof("+j+")==='function'?("+j+").call($item):("+j+"))"):h=d=e.$1||"null";a=u(a);return"');"+c[g?"close":"open"].split("$notnull_1").join(j?"typeof("+j+")!=='undefined' && ("+j+")!=null":"true").split("$1a").join(h).split("$1").join(d).split("$2").join(a||e.$2||"")+"__.push('"})+
"');}return __;")}function w(a,c){a._wrap=r(a,!0,b.isArray(c)?c:[d.test(c)?c:b(c).html()]).join("")}function u(b){return b?b.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function n(a){function c(a){function c(b){var B;b+=g;B=d[b]=d[b]||t(h,i[h.parent.key+g]||h.parent),h=B}var e,j=a,h,f;if(f=a.getAttribute(l)){for(;j.parentNode&&(j=j.parentNode).nodeType===1&&!(e=j.getAttribute(l)););if(e!==f){j=j.parentNode?j.nodeType===11?0:j.getAttribute(l)||0:0;if(!(h=i[f]))h=k[f],h=t(h,i[j]||k[j]),h.key=++s,
i[s]=h;p&&c(f)}a.removeAttribute(l)}else if(p&&(h=b.data(a,"tmplItem")))c(h.key),i[h.key]=h,j=(j=b.data(a.parentNode,"tmplItem"))?j.key:0;if(h){for(e=h;e&&e.key!=j;)e.nodes.push(a),e=e.parent;delete h._ctnt;delete h._wrap;b.data(a,"tmplItem",h)}}var g="_"+p,e,h,d={},f,q,m;f=0;for(q=a.length;f<q;f++)if((e=a[f]).nodeType===1){h=e.getElementsByTagName("*");for(m=h.length-1;m>=0;m--)c(h[m]);c(e)}}function x(b,a,g,e){if(!b)return o.pop();o.push({_:b,tmpl:a,item:this,data:g,options:e})}function y(a,c,g){return b.tmpl(b.template(a),
c,g,this)}function f(a,c){var g=a.options||{};g.wrapped=c;return b.tmpl(b.template(a.tmpl),a.data,g,a.item)}function z(a,c){var g=this._wrap;return b.map(b(b.isArray(g)?g.join(""):g).filter(a||"*"),function(b){if(c)b=b.innerText||b.textContent;else{var a;if(!(a=b.outerHTML))a=document.createElement("div"),a.appendChild(b.cloneNode(!0)),a=a.innerHTML;b=a}return b})}function a(){var a=this.nodes;b.tmpl(null,null,null,this).insertBefore(a[0]);b(a).remove()}var h=b.fn.domManip,l="_tmplitem",d=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
i={},k={},m,q={key:0,data:{}},s=0,p=0,o=[];b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){b.fn[a]=function(g){var e=[],g=b(g),h,d,l;h=this.length===1&&this[0].parentNode;m=i||{};if(h&&h.nodeType===11&&h.childNodes.length===1&&g.length===1)g[c](this[0]),e=this;else{d=0;for(l=g.length;d<l;d++)p=d,h=(d>0?this.clone(!0):this).get(),b(g[d])[c](h),e=e.concat(h);p=0;e=this.pushStack(e,a,g.selector)}g=m;m=null;b.tmpl.complete(g);
return e}});b.fn.extend({tmpl:function(a,c,g){return b.tmpl(this[0],a,c,g)},tmplItem:function(){return b.tmplItem(this[0])},template:function(a){return b.template(a,this[0])},domManip:function(a,c,g,e){if(a[0]&&b.isArray(a[0])){for(var d=b.makeArray(arguments),l=a[0],f=l.length,k=0,q;k<f&&!(q=b.data(l[k++],"tmplItem")););q&&p&&(d[2]=function(a){b.tmpl.afterManip(this,a,g)});h.apply(this,d)}else h.apply(this,arguments);p=0;m||b.tmpl.complete(i);return this}});b.extend({tmpl:function(a,c,g,e){var h=
!e;if(h)e=q,a=b.template[a]||b.template(null,a),k={};else if(!a)return a=e.tmpl,i[e.key]=e,e.nodes=[],e.wrapped&&w(e,e.wrapped),b(r(e,null,e.tmpl(b,e)));if(!a)return[];typeof c==="function"&&(c=c.call(e||{}));g&&g.wrapped&&w(g,g.wrapped);c=b.isArray(c)?b.map(c,function(b){return b?t(g,e,a,b):null}):[t(g,e,a,c)];return h?b(r(e,null,c)):c},tmplItem:function(a){var c;for(a instanceof b&&(a=a[0]);a&&a.nodeType===1&&!(c=b.data(a,"tmplItem"))&&(a=a.parentNode););return c||q},template:function(a,c){return c?
(typeof c==="string"?c=A(c):c instanceof b&&(c=c[0]||{}),c.nodeType&&(c=b.data(c,"tmpl")||b.data(c,"tmpl",A(c.innerHTML))),typeof a==="string"?b.template[a]=c:c):a?typeof a!=="string"?b.template(null,a):b.template[a]||b.template(null,d.test(a)?a:b(a)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});b.extend(b.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},
open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){i={}},afterManip:function(a,
c,h){var e=c.nodeType===11?b.makeArray(c.childNodes):c.nodeType===1?[c]:[];h.call(a,c);n(e);p++}})})(jQuery);
(function(){var b,t,r,v,A,w,u,n,x,y,f,z=function(a,b){return function(){return a.apply(b,arguments)}};f=this;b=f.jQuery;f.pte=n=n||{};(function(a){return a.fixThickbox=function(a){var b,d,i,k;b=a.jQuery;if(!(b===null||a.frames.length<1))if(log("===== FIXING THICKBOX ====="),k=f.options.pte_tb_width+30,i=f.options.pte_tb_height+38,d=b("#TB_window"),!(d.width()>=k&&d.height()>=i))return log("THICKBOX: "+d.width()+" x "+d.height()),d.css({"margin-left":0-k/2,width:k,height:i}).children("iframe").css({width:k}),
a.setTimeout(function(){if(!(b("iframe",d).height()>i))return b("iframe",d).css({height:i}),log("THICKBOX: "+d.width()+" x "+d.height()),!0},1E3)}})(n);y=function(a){return{}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};t=function(){function a(a){this.message=a;this.date=new Date}a.prototype.toString=function(){var a,l,d,i,f,m,q;m=function(a,b){for(;(""+a).length<b;)a="0"+a;return a};d=this.date;q=m(d.getUTCFullYear(),4);l=m(d.getUTCMonth()+1,2);a=m(d.getUTCDate(),2);i=m(d.getUTCHours(),
2);f=m(d.getUTCMinutes(),2);m=m(d.getUTCSeconds(),2);switch(y(this.message)){case "string":d=this.message;break;default:d=b.toJSON(this.message)}return""+q+l+a+" "+i+":"+f+":"+m+" - ["+y(this.message)+"] "+d};return a}();(function(a){a.messages=[];a.log=function(h){if(!f.options.pte_debug)return!0;try{a.messages.push(new t(h)),console.log(h),b("#pte-log-messages textarea").filter(":visible").val(a.formatLog())}catch(l){}};a.formatLog=function(){var b,l,d,i,f;b="";f=a.messages;d=0;for(i=f.length;d<
i;d++)l=f[d],b+=""+l+"\n";return b};a.parseServerLog=function(a){var b,d,f;log("===== SERVER LOG =====");if((a!=null?a.length:void 0)!=null&&a.length>0){d=0;for(f=a.length;d<f;d++)b=a[d],log(b)}return!0};a.sendToPastebin=function(a){return b.ajax({url:"http://dpastey.appspot.com/",data:{title:"PostThumbnailEditor Log",content:a,lexer:"text",format:"json",expire_options:"2592000"},dataType:"json",global:!1,type:"POST",error:function(a,h,f){b("#pte-log").fadeOut("900");alert(objectL10n.pastebin_create_error);
log(a);log(h);return log(f)},success:function(a){b("#pte-log").fadeOut("900");return prompt(objectL10n.pastebin_url,a.url)}})};return!0})(n);f.log=n.log;b(document).ready(function(a){a("#test").click(function(a){a.stopImmediatePropagation();return!0});a("#pastebin").click(function(){return n.sendToPastebin(n.formatLog())});a("#clear-log").click(function(){n.messages=[];return a("#pte-log-messages textarea").val(n.formatLog())});a("#close-log").click(function(){return a("#pte-log").fadeOut("900")});
a("#pte-log-tools a").click(function(a){return a.preventDefault()});return a("body").delegate(".show-log-messages","click",function(b){b.preventDefault();a("#pte-log-messages textarea").val(n.formatLog());return a("#pte-log").fadeIn("900")})});(function(a){return a.admin=function(){var a,l,d,i,k,m;m="&TB_iframe=true&height="+f.options.pte_tb_height+"&width="+f.options.pte_tb_width;d=null;k=function(a){a=a||d||b("#attachment-id").val();return""+ajaxurl+"?action=pte_ajax&pte-action=launch&id="+a+m};
a=function(a){return b('<a class="thickbox" href="'+k(a)+'">'+objectL10n.PTE+"</a>")};l=function(a){log("Start PTE...");if(f.parent.frames.length>0)return log("Modifying thickbox..."),z(function(){f.parent.tb_click();return!0},this)(),a.stopPropagation()};i=function(){var k;k=b("#imgedit-save-target-"+d);return(k!=null?k.size():void 0)<1?(f.log("Edit Thumbnail Menu not visible, waiting for 300ms"),f.setTimeout(i,300),!1):k.append(a().click(l))};return function(){b(".media-item").each(function(d,f){var i;
i=f.id.replace("media-item-","");return a(i).css({"font-size":".8em","margin-left":"5px"}).click(l).appendTo(b("tr.image-size th.label",f))});if(imageEdit.open!=null)imageEdit.oldopen=imageEdit.open,imageEdit.open=function(a,b){d=a;imageEdit.oldopen(a,b);return i()};return!0}()}})(n);r=function(){function a(a,b){this.fn=a;this.timeout=b;this.doFunc=z(this.doFunc,this);this.timer=null}a.prototype.doFunc=function(){f.clearTimeout(this.timer);this.timer=f.setTimeout(this.fn,this.timeout);return!0};return a}();
f.randomness=function(){return Math.floor(Math.random()*1000001).toString(16)};f.debugTmpl=function(a){log("===== TEMPLATE DEBUG DATA FOLLOWS =====");log(a);return!0};v=function(a){a={id:a,action:"pte_ajax","pte-action":"delete-images","pte-nonce":b("#pte-delete-nonce").val()};return b.ajax({url:ajaxurl,data:a,global:!1,dataType:"json",success:A})};A=function(a){log("===== DELETE SUCCESSFUL, DATA DUMP FOLLOWS =====");log(a);return n.parseServerLog(a.log)};x=b({});b.fn.extend({move:function(a){a=b.extend({direction:"left",
speed:500,easing:"swing",toggle:!0,callback:null,callbackargs:null},a);this.each(function(){return x.queue(z(function(h){var l,d,i,k;l=b(this);d=a.direction==="left"?-1:1;k=l.css("left")==="0px"?b(f).width()*d:0;i=l.is(":visible");log([d,k,i]);i?(l.animate({left:k},a.speed,a.easing),l.hide(0,h)):l.show(0,function(){return b(this).animate({left:k},a.speed,a.easing,h)});return!0},this))});a.callback!=null&&x.queue(function(b){a.callbackargs!=null?(log("running callback with arguments"),a.callback.apply(this,
a.callbackargs)):(log("running callback with no arguments"),a.callback.apply(this));log("finished running callback");return b()});return this},moveRight:function(a){a=b.extend(a,{direction:"right"});return this.move(a)},moveLeft:function(a){a=b.extend(a,{direction:"left"});return this.move(a)}});f.goBack=function(a){a!=null&&a.preventDefault();b("#stage2").moveRight();b("#stage1").moveRight({callback:function(){v(b("#pte-post-id").val());return b("#stage2").html("")}});return!0};u=function(a,b){if(a===
0)return b;for(;b>0;)a>b?a-=b:b-=a;return a<0||b<0?null:a};w=function(a,b){var f,d,i,k;f=b.crop;k=b.width;i=b.height;f=+f;k=+k;i=+i;d=u(k,i);if(f!=null&&f>0){f=null;(k!=null)>0&&(i!=null)>0&&(f=d!=null?""+k/d+":"+i/d:""+k+":"+i);if(a!=null&&f!=null&&f!==a)throw objectL10n.aspect_ratio_disabled;a=f}return a};n.functions={determineAspectRatio:w};(function(a){var h,l,d,i,k,m,n,s,p,o,j;a.editor=function(){n();d();j();l();i();k();h();m();return!0};m=function(){var a,g;a=b("#pte-loading");g=function(){a.hide();
return!0};b("#pte-preview").load(g);a.ajaxStart(function(){return b(this).fadeIn(200)}).ajaxStop(function(){return b(this).fadeOut(200)});f.setTimeout(g,2E3);return!0};n=function(){var c;c=new r(function(){var c;log("===== REFLOW =====");a.fixThickbox(f.parent);c=b("#pte-sizes").offset();c=b(f).height()-c.top-2;b("#pte-sizes").height(c);log("WINDOW WIDTH: "+b(f).width());b("#stage2, #stage3").filter(":hidden").css({left:b(f).width()});return!0},100);b(f).resize(c.doFunc).load(c.doFunc);return!0};
d=function(){var a;a=function(a){a.delegate("tr","click",function(a){a.target.type!=="checkbox"&&b("input:checkbox",this).click();return!0});return a.delegate("input:checkbox","click",function(){this.checked||b(this).is("input:checked")?b(this).parents("tr").first().removeClass("selected"):b(this).parents("tr").first().addClass("selected");return!0})};a(b("#stage2"));return a(b("#stage1"))};o=null;p={keys:!0,minWidth:3,minHeight:3,handles:!0,zIndex:1200,instance:!0,onSelectEnd:function(a,g){return g.width&&
g.width>0&&g.height&&g.height>0&&b(".pte-size").filter(":checked").size()>0?b("#pte-submit").removeAttr("disabled"):b("#pte-submit").attr("disabled",!0)}};j=function(){return a.ias=o=b("#pte-image img").imgAreaSelect(p)};s=function(a){log("===== SETTING ASPECTRATIO: "+a+" =====");o.setOptions({aspectRatio:a});return o.update()};l=function(){var c,g;g=new r(function(){log("===== CHECK SUBMIT BUTTON =====");b(".pte-confirm").filter(":checked").size()>0?(log("ENABLE"),b("#pte-confirm").removeAttr("disabled")):
(log("DISABLE"),b("#pte-confirm").attr("disabled",!0));return!0},50);c=new r(function(){var a;a=null;b("input.pte-size").filter(":checked").each(function(c,g){try{a=w(a,thumbnail_info[b(g).val()])}catch(d){return a=null,a!==o.getOptions().aspectRatio&&alert(d),!1}return!0});s(a);p.onSelectEnd(null,o.getSelection());return!0},50);b.extend(a.functions,{pteVerifySubmitButtonHandler:g});b("input.pte-size").click(c.doFunc);return b(".pte-confirm").live("click",function(){return g.doFunc()})};i=function(){var c;
b("#pte-submit").click(function(){var a,e;e=o.getSelection();a=b("#pte-sizer").val();a={id:b("#pte-post-id").val(),action:"pte_ajax","pte-action":"resize-images","pte-sizes[]":b(".pte-size").filter(":checked").map(function(){return b(this).val()}).get(),x:Math.floor(e.x1/a),y:Math.floor(e.y1/a),w:Math.floor(e.width/a),h:Math.floor(e.height/a)};log("===== RESIZE-IMAGES =====");log(a);if(isNaN(a.x)||isNaN(a.y)||isNaN(a.w)||isNaN(a.h))return alert(objectL10n.crop_submit_data_error),log("ERROR with submit_data and NaN's"),
!1;o.setOptions({hide:!0,x1:0,y1:0,x2:0,y2:0});b("#pte-submit").attr("disabled",!0);b.getJSON(ajaxurl,a,c);return!0});return c=function(c){log("===== RESIZE-IMAGES SUCCESS =====");log(c);a.parseServerLog(c.log);if(c.error!=null&&c.thumbnails==null)alert(c.error);else return b("#stage1").moveLeft(),b("#stage2").html(b("#stage2template").tmpl(c)).moveLeft({callback:a.functions.pteVerifySubmitButtonHandler.doFunc}),!1}};k=function(){var c;b("#pte-confirm").live("click",function(){var a,e;e={};b("input.pte-confirm").filter(":checked").each(function(a,
c){var d;d=b(c).val();return e[d]=b(c).parent().parent().find(".pte-file").val()});a={id:b("#pte-post-id").val(),action:"pte_ajax","pte-action":"confirm-images","pte-nonce":b("#pte-nonce").val(),"pte-confirm":e};log("===== CONFIRM-IMAGES =====");log(a);return b.getJSON(ajaxurl,a,c)});return c=function(c){log("===== CONFIRM-IMAGES SUCCESS =====");log(c);a.parseServerLog(c.log);b("#stage2").moveLeft();b("#stage3").html(b("#stage3template").tmpl(c)).moveLeft();return!1}};h=function(){var a,d;d=function(a){var e;
var c,d;a!=null&&a.preventDefault();e=(c=(d=a.data)!=null?d.selector:void 0)!=null?c:".pte-size",a=e;return b(a).filter(":checked").click()};a=function(a){var e;var c,d;a!=null&&a.preventDefault();e=(c=a!=null?(d=a.data)!=null?d.selector:void 0:void 0)!=null?c:".pte-size",a=e;return b(a).not(":checked").click()};b("#pte-selectors .all").click(a);b("#pte-selectors .none").click(d).click();b("#stage2").delegate("#pte-stage2-selectors .all","click",{selector:".pte-confirm"},a);b("#stage2").delegate("#pte-stage2-selectors .none",
"click",{selector:".pte-confirm"},d);return!0};return b.extend(a.functions,{iasSetAR:s})})(n)}).call(this);
