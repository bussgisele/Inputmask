(function(g){g.extend(g.inputmask.defaults.aliases,{numeric:{mask:function(a){0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat);a.repeat=0;a.autoGroup=a.autoGroup&&""!=a.groupSeparator;if(a.autoGroup&&isFinite(a.integerDigits)){var c=Math.floor(a.integerDigits/a.groupSize);a.integerDigits+=0==a.integerDigits%a.groupSize?c-1:c}c=a.prefix;c=c+"[+]"+("~{1,"+a.integerDigits+"}");void 0!=a.digits&&(isNaN(a.digits)||0<parseInt(a.digits))&&(c=a.digitsOptional?c+("["+a.radixPoint+"~{"+a.digits+
"}]"):c+(a.radixPoint+"~{"+a.digits+"}"));return c+=a.suffix},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,groupSeparator:"",radixPoint:".",groupSize:3,autoGroup:!1,allowPlus:!0,allowMinus:!0,integerDigits:"+",defaultValue:"",prefix:"",suffix:"",skipRadixDance:!1,getLastValidPosition:function(a,c,e){var d=-1,f=a.validPositions,b;for(b in f)f=parseInt(b),f>d&&(d=f);void 0!=c&&(a=a.buffer,!1===e.skipRadixDance&&""!=e.radixPoint&&-1!=g.inArray(e.radixPoint,a)&&(d=g.inArray(e.radixPoint,a)));
return d},rightAlign:!0,postFormat:function(a,c,e,d){var f=!1;if(""==d.groupSeparator)return{pos:c};var b=a.slice();e||b.splice(c,0,"?");b=b.join("");if(d.autoGroup||e&&-1!=b.indexOf(d.groupSeparator)){var h=g.inputmask.escapeRegex.call(this,d.groupSeparator),b=b.replace(RegExp(h,"g"),""),h=b.split(d.radixPoint),b=h[0];if(b!=d.prefix+"?0")for(var f=!0,k=RegExp("([-+]?[\\d?]+)([\\d?]{"+d.groupSize+"})");k.test(b);)b=b.replace(k,"$1"+d.groupSeparator+"$2"),b=b.replace(d.groupSeparator+d.groupSeparator,
d.groupSeparator);1<h.length&&(b+=d.radixPoint+h[1])}a.length=b.length;d=0;for(h=b.length;d<h;d++)a[d]=b.charAt(d);b=g.inArray("?",a);e||a.splice(b,1);return{pos:e?c:b,refreshFromBuffer:f}},onKeyDown:function(a,c,e){g(this);if(e.autoGroup&&a.keyCode==e.keyCode.DELETE||a.keyCode==e.keyCode.BACKSPACE)return e.postFormat(c,0,!0,e)},regex:{integerPart:function(a){return/[-+]?\d+/}},definitions:{"~":{validator:function(a,c,e,d,f){if(!d&&f.allowMinus&&"-"===a){var b=c.join("").match(f.regex.integerPart(f));
if(0<b.length)return"+"==c[b.index]?(c.splice(b.index,1),{pos:b.index,c:"-",refreshFromBuffer:!0,caret:e}):"-"==c[b.index]?(c.splice(b.index,1),{refreshFromBuffer:!0,caret:e-1}):{pos:b.index,c:"-",caret:e+1}}b=d?RegExp("[0-9"+g.inputmask.escapeRegex.call(this,f.groupSeparator)+"]").test(a):/[0-9]/.test(a);return!1==b||d||a==f.radixPoint||!0!==f.autoGroup?b:f.postFormat(c,e,"-"==a||"+"==a?!0:!1,f)},cardinality:1,prevalidator:null},"+":{validator:function(a,c,e,d,f){c="[";!0===f.allowMinus&&(c+="-");
!0===f.allowPlus&&(c+="+");return RegExp(c+"]").test(a)},cardinality:1,prevalidator:null}},insertMode:!0,autoUnmask:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:"0"}})})(jQuery);
