var d2b = (function (exports, vuePropertyDecorator, d3Selection, d3Transition, d2b) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  var Generator =
  /*#__PURE__*/
  function (_Vue) {
    _inherits(Generator, _Vue);

    function Generator() {
      var _this;

      _classCallCheck(this, Generator);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Generator).apply(this, arguments));
      _this.name = 'generator';

      _this.unwatch = function () {};

      return _this;
    }

    _createClass(Generator, [{
      key: "update",
      value: function update() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          skipTransition: false
        };
        this.unwatcher();
        this.$emit('beforeRender', this.$el, this.generator);
        var data = this.data;

        if (this.config) {
          this.config(this.generator);
        }

        var el = d3Selection.select(this.$el);
        var generator = this.advanced ? this.generator.advanced : this.generator;
        el.datum(data);

        if (options.skipTransition) {
          el.call(generator);
        } else {
          el.transition().duration(this.duration).call(generator);
        }

        this.$emit('rendered', this.$el, this.generator);
        this.watcher();
      }
    }, {
      key: "updateNow",
      value: function updateNow() {
        this.update({
          skipTransition: true
        });
      }
    }, {
      key: "updateDefer",
      value: function updateDefer() {
        setTimeout(this.updateNow, 0);
      }
    }, {
      key: "destroyed",
      value: function destroyed() {
        d3Selection.selectAll('.d2b-tooltip').remove();
        d3Selection.select(window).on("resize.".concat(this.id), null);
      }
    }, {
      key: "mounted",
      value: function mounted() {
        this.updateDefer();
        d3Selection.select(window).on("resize.".concat(this.id), this.updateDefer);
      }
    }, {
      key: "unwatcher",
      value: function unwatcher() {
        if (this.unwatch) {
          this.unwatch();
        }
      }
    }, {
      key: "watcher",
      value: function watcher() {
        this.unwatcher();
        this.unwatch = this.$watch('properties', this.update, {
          deep: true
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          generator: this.generator,
          data: this.data,
          config: this.config
        };
      }
    }]);

    return Generator;
  }(vuePropertyDecorator.Vue);

  __decorate([vuePropertyDecorator.Prop({
    required: true
  })], Generator.prototype, "data", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.chartAxis
  })], Generator.prototype, "generator", void 0);

  __decorate([vuePropertyDecorator.Prop()], Generator.prototype, "config", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": 250
  })], Generator.prototype, "duration", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.id
  })], Generator.prototype, "id", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": true
  })], Generator.prototype, "advanced", void 0);

  Generator = __decorate([vuePropertyDecorator.Component({})], Generator);
  var script = Generator;

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      "class": ["vue-d2b-container", "vue-d2b-" + _vm.name]
    });
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-1f6fd396_0", {
      source: "\n.vue-d2b-container {\n  height: 100%;\n  width: 100%;\n}\n",
      map: {
        "version": 3,
        "sources": ["/Users/kevinwarne/Documents/My_Repos/vue-d2b/src/components/Generator.vue"],
        "names": [],
        "mappings": ";AAwFA;EACA,YAAA;EACA,WAAA;AACA",
        "file": "Generator.vue",
        "sourcesContent": ["<template>\n  <div :class=\"['vue-d2b-container', `vue-d2b-${name}`]\"></div>\n</template>\n\n<script lang=\"ts\">\n  import { Component, Vue, Prop } from 'vue-property-decorator';\n  import { select, selectAll } from 'd3-selection';\n  import 'd3-transition';\n  import { chartAxis, id } from 'd2b';\n\n  @Component({})\n  export default class Generator extends Vue {\n    public name = 'generator';\n\n    @Prop({ required: true }) public data!: any;\n    @Prop({ default: chartAxis }) public generator!: any;\n    @Prop() public config!: (chart: any) => void;\n\n    @Prop({ default: 250 }) private duration!: number;\n    @Prop({ default: id }) private id!: any;\n    @Prop({ default: true }) private advanced!: boolean;\n\n    private unwatch = () => {};\n\n    get properties() {\n      return {\n        generator: this.generator,\n        data: this.data,\n        config: this.config,\n      };\n    }\n\n    public update(options = { skipTransition: false }) {\n      this.unwatcher();\n      this.$emit('beforeRender', this.$el, this.generator);\n\n      const data = this.data;\n\n      if (this.config) {\n        this.config(this.generator);\n      }\n\n      const el = select(this.$el);\n      const generator = this.advanced ? this.generator.advanced : this.generator;\n\n      el.datum(data);\n      if (options.skipTransition) {\n        el.call(generator);\n      } else {\n        el.transition().duration(this.duration).call(generator);\n      }\n\n      this.$emit('rendered', this.$el, this.generator);\n      this.watcher();\n    }\n\n    public updateNow() {\n      this.update({skipTransition: true});\n    }\n\n    public updateDefer() {\n      setTimeout(this.updateNow, 0);\n    }\n\n    private destroyed() {\n      selectAll('.d2b-tooltip').remove();\n      select(window).on(`resize.${this.id}`, null);\n    }\n\n    private mounted() {\n      this.updateDefer();\n      select(window).on(`resize.${this.id}`, this.updateDefer);\n    }\n\n    private unwatcher() {\n      if (this.unwatch) {\n        this.unwatch();\n      }\n    }\n\n    private watcher() {\n      this.unwatcher();\n      this.unwatch = this.$watch('properties', this.update, {deep: true});\n    }\n  }\n</script>\n\n<style style=\"scss\">\n  .vue-d2b-container {\n    height: 100%;\n    width: 100%;\n  }\n</style>\n"]
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  var Generator$1 = normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

  var ChartAxis =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(ChartAxis, _Generator);

    function ChartAxis() {
      var _this;

      _classCallCheck(this, ChartAxis);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartAxis).apply(this, arguments));
      _this.name = 'chart-axis';
      return _this;
    }

    return ChartAxis;
  }(Generator$1);

  __decorate([vuePropertyDecorator.Prop({
    required: true
  })], ChartAxis.prototype, "data", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.chartAxis
  })], ChartAxis.prototype, "generator", void 0);

  ChartAxis = __decorate([vuePropertyDecorator.Component({})], ChartAxis);
  var script$1 = ChartAxis;

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = undefined;
  /* style inject */

  /* style inject SSR */

  var ChartAxis$1 = normalizeComponent_1({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

  var ChartPie =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(ChartPie, _Generator);

    function ChartPie() {
      var _this;

      _classCallCheck(this, ChartPie);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartPie).apply(this, arguments));
      _this.name = 'chart-pie';
      return _this;
    }

    return ChartPie;
  }(Generator$1);

  __decorate([vuePropertyDecorator.Prop({
    required: true
  })], ChartPie.prototype, "data", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.chartPie
  })], ChartPie.prototype, "generator", void 0);

  ChartPie = __decorate([vuePropertyDecorator.Component({})], ChartPie);
  var script$2 = ChartPie;

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = undefined;
  /* style inject */

  /* style inject SSR */

  var ChartPie$1 = normalizeComponent_1({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

  var ChartSunburst =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(ChartSunburst, _Generator);

    function ChartSunburst() {
      var _this;

      _classCallCheck(this, ChartSunburst);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartSunburst).apply(this, arguments));
      _this.name = 'chart-sunburst';
      return _this;
    }

    return ChartSunburst;
  }(Generator$1);

  __decorate([vuePropertyDecorator.Prop({
    required: true
  })], ChartSunburst.prototype, "data", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.chartSunburst
  })], ChartSunburst.prototype, "generator", void 0);

  ChartSunburst = __decorate([vuePropertyDecorator.Component({})], ChartSunburst);
  var script$3 = ChartSunburst;

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = undefined;
  /* style inject */

  /* style inject SSR */

  var ChartSunburst$1 = normalizeComponent_1({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

  var ChartSankey =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(ChartSankey, _Generator);

    function ChartSankey() {
      var _this;

      _classCallCheck(this, ChartSankey);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartSankey).apply(this, arguments));
      _this.name = 'chart-sankey';
      return _this;
    }

    return ChartSankey;
  }(Generator$1);

  __decorate([vuePropertyDecorator.Prop({
    required: true
  })], ChartSankey.prototype, "data", void 0);

  __decorate([vuePropertyDecorator.Prop({
    "default": d2b.chartSankey
  })], ChartSankey.prototype, "generator", void 0);

  ChartSankey = __decorate([vuePropertyDecorator.Component({})], ChartSankey);
  var script$4 = ChartSankey;

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = undefined;
  /* style inject */

  /* style inject SSR */

  var ChartSankey$1 = normalizeComponent_1({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

  // This file will build the plugin

  exports.ChartAxis = ChartAxis$1;
  exports.ChartPie = ChartPie$1;
  exports.ChartSankey = ChartSankey$1;
  exports.ChartSunburst = ChartSunburst$1;
  exports.Generator = Generator$1;

  return exports;

}({}, VuePropertyDecorator, d3, d3, d2b));
