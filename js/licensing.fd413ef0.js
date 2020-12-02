(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["licensing"],{"4de4":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid monarch-view monarch-licensing offset-1 col-10"},[n("h2",{staticClass:"page-title"},[e._v(" About Licensing ")]),n("p",[e._v(" The Monarch App is comprised of multiple different components: interface, data, ontologies, software and algorithms. It is therefore not possible to provide everything under a unified license. The specific components and their licensing information are below. ")]),n("h4",[e._v("Interface")]),e._m(0),n("h4",[e._v("Algorithms")]),e._m(1),n("h4",[e._v("Semantic tools and workflows")]),e._m(2),n("h4",{attrs:{id:"ontologies"}},[e._v(" Ontologies maintained by Monarch ")]),n("ul",e._l(e.ontologyLicenseInfo.ontologies,(function(t){return n("div",{key:t.id},[["ecto","geno","hp","maxo","mondo","sepio","upheno"].includes(t.id)?n("li",[t.homepage?n("a",{attrs:{href:t.homepage,target:"_blank"}},[e._v(e._s(t.title))]):n("span",[e._v(e._s(t.title))]),e._v(" : "),t.license?n("a",{attrs:{href:t.license.url,target:"_blank"}},[e._v(" "+e._s(t.license.label)+" License ")]):n("span",[e._v("No license info")])]):e._e()])})),0),n("h4",[e._v("Ontologies used by Monarch")]),n("ul",e._l(e.ontologyLicenseInfo.ontologies,(function(t){return n("div",{key:t.id},[["bfo","caro","chebi","cl","clo","dc","eco","ero","faldo","fao","fbbt","foaf","go","hsapdv","iao","mpath","nbo","ncbitaxon","ncit","oba","oban","pato","pco","po","pw","ro","so","stato","uberon","vt","wbbt","xco","zfa"].includes(t.id)?n("li",[t.homepage?n("a",{attrs:{href:t.homepage,target:"_blank"}},[e._v(e._s(t.title))]):n("a",[e._v(e._s(t.title))]),e._v(" : "),t.license?n("a",{attrs:{href:t.license.url,target:"_blank"}},[e._v(" "+e._s(t.license.label)+" License ")]):e._e()]):e._e()])})),0),n("h4",[e._v("Other Standards")]),e._m(3),n("h4",[e._v("Data")]),e._m(4)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/monarch-initiative/monarch-ui"}},[e._v("The Monarch-UI: ")]),n("a",{attrs:{href:"https://github.com/monarch-initiative/monarch-ui/blob/master/LICENSE.txt"}},[e._v("BSD 3 License")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://monarch-exomiser-web-dev.monarchinitiative.org/exomiser/"}},[e._v("Exomiser")]),e._v(": "),n("a",{attrs:{href:"http://opensource.org/licenses/AGPL-3.0"}},[e._v(" GNU Affero General Public License, version 3")])]),n("li",[n("a",{attrs:{href:"https://github.com/owlcollab/owltools/"}},[e._v("OwlSim")]),e._v(": "),n("a",{attrs:{href:"https://github.com/owlcollab/owltools/blob/master/LICENSE.txt"}},[e._v("BSD 3 License")])]),n("li",[n("a",{attrs:{href:"https://github.com/TheJacksonLaboratory/LIRICAL"}},[e._v("LIRICAL")]),e._v(": "),n("a",{attrs:{href:"https://github.com/TheJacksonLaboratory/LIRICAL/blob/master/LICENSE"}},[e._v("License information")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/monarch-initiative/dipper"}},[e._v("Dipper")]),e._v(": "),n("a",{attrs:{href:"https://github.com/monarch-initiative/dipper/blob/master/LICENSE.txt"}},[e._v("BSD 3 License")])]),n("li",[n("a",{attrs:{href:"https://github.com/SciGraph/SciGraph/"}},[e._v("SciGraph")]),e._v(": "),n("a",{attrs:{href:"https://github.com/SciGraph/SciGraph/blob/master/LICENSE"}},[e._v("Apache License 2.0")])]),n("li",[n("a",{attrs:{href:"https://github.com/biolink/ontobio"}},[e._v("OntoBio")]),e._v(": "),n("a",{attrs:{href:"https://github.com/biolink/ontobio/blob/master/LICENSE"}},[e._v("BSD 3 License")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/phenopackets/phenopacket-schema"}},[e._v("Phenopackets")]),e._v(": "),n("a",{attrs:{href:"https://github.com/phenopackets/phenopacket-schema/blob/master/LICENSE"}},[e._v("BSD 3 License")])]),n("li",[n("a",{attrs:{href:"https://github.com/biolink/biolink-api"}},[e._v("BioLink-api")]),e._v(": "),n("a",{attrs:{href:"https://github.com/biolink/biolink-api/blob/master/LICENSE"}},[e._v("BSD 3 License")])]),n("li",[n("a",{attrs:{href:"https://github.com/biolink/biolink-model"}},[e._v("BioLink-model")]),e._v(": "),n("a",{attrs:{href:"https://github.com/biolink/biolink-model/blob/master/LICENSE"}},[e._v("CC-0 v1.0 Universal License")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Data are derived from multiple sources (see "),n("a",{attrs:{href:"/about/data-sources"}},[e._v("here")]),e._v("), each with its own license. We have described this licensing challenge extensively on "),n("a",{attrs:{href:"https://reusabledata.org/"}},[e._v("reusabledata.org")]),e._v(" and our "),n("a",{attrs:{href:"https://doi.org/10.1371/journal.pone.0213090"}},[e._v("2018 PlosOne publication")]),e._v(". Many of the specific data resources we use in Monarch have been evaluated according to our reusabledata.org rubric; see the corpus of evaluations "),n("a",{attrs:{href:"https://reusabledata.org/#our-sources-data"}},[e._v("here")]),e._v(". ")])}],r=n("a34a"),i=n.n(r),s=n("bc3a"),c=n.n(s),l=n("651e"),h=n.n(l);function u(e,t,n,o,a,r,i){try{var s=e[r](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(o,a)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(e){u(r,o,a,i,s,"next",e)}function s(e){u(r,o,a,i,s,"throw",e)}i(void 0)}))}}function p(){return f.apply(this,arguments)}function f(){return f=v(i.a.mark((function e(){var t,n,o;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://raw.githubusercontent.com/OBOFoundry/OBOFoundry.github.io/master/registry/ontologies.yml",e.next=3,c.a.get(t);case 3:return n=e.sent,o=null,e.prev=5,e.next=8,h.a.safeLoad(n.data,"utf8");case 8:o=e.sent,e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](5);case 13:return e.abrupt("return",o);case 14:case"end":return e.stop()}}),e,null,[[5,11]])}))),f.apply(this,arguments)}function b(e,t,n,o,a,r,i){try{var s=e[r](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(o,a)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(e){b(r,o,a,i,s,"next",e)}function s(e){b(r,o,a,i,s,"throw",e)}i(void 0)}))}}var m={data:function(){return{ontologyLicenseInfo:[],coreOntologies:[],keyOntologies:[]}},mounted:function(){var e=this;return _(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:e.ontologyLicenseInfo=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},d=m,g=n("2877"),L=Object(g["a"])(d,o,a,!1,null,null,null);t["default"]=L.exports}}]);
//# sourceMappingURL=licensing.fd413ef0.js.map