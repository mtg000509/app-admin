import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    ignores: ['**/dist/**', '**/node_modules/**'],
  },

  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  importPlugin.flatConfigs.recommended,

  {
    // vue 文件解析配置
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // 要求注释位于代码上方
      '@stylistic/line-comment-position': ['error', { position: 'above' }],
      // 要求注释前有空行
      '@stylistic/lines-around-comment': [
        'error',
        { beforeBlockComment: true },
      ],
      // 不允许连续的行注释，支持块注释，要求块状注释在每行之前有一个对齐的 * 字符
      '@stylistic/multiline-comment-style': ['error', 'starred-block'],
      // 禁止使用可能与比较混淆的箭头函数
      'no-confusing-arrow': 'error',
      // 禁止不必要的分号
      'no-extra-semi': 'error',
      // 消除浮动的小数点，只要一个数字值有小数点，小数点之前或之后必须有一个数字
      'no-floating-decimal': 'error',
      // 要求对复杂的表达式使用小括号
      'no-mixed-operators': 'error',
      // 强制执行注释 // 或 /* 后至少一个空格
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      // 要求正则表达式文字周围加括号
      '@stylistic/wrap-regex': 'error',
    },
  },

  {
    /**
     * 配置规则级别：
     * - "off" 或 0: 禁用
     * - "warn" 或 1: 警告
     * - "error" 或 2: 错误
     */
    rules: {
      /* ===== eslint ===== */

      // 禁止与 -0 进行比较
      'no-compare-neg-zero': 'error',
      // 禁止重新分配 const 变量
      'no-const-assign': 'error',
      // 禁止使用 debugger
      'no-debugger': 'error',
      // 禁止双方完全相同的比较
      'no-self-compare': 'error',
      // 禁止在常规字符串中使用模板字面占位符语法
      'no-template-curly-in-string': 'error',
      // 禁止使用未声明的变量，除非在 /*global */ 注释中提及
      'no-undef': 'error',
      // 不允许循环体只允许一次迭代
      'no-unreachable-loop': 'error',
      /** 禁止未使用的变量  @reason @typescript-eslint/no-unused-vars */
      'no-unused-vars': 'off',
      /** 禁止在定义变量之前使用变量 @reason @typescript-eslint/no-use-before-define */
      'no-use-before-define': 'off',
      // 不允许与 NaN 进行比较
      'use-isnan': 'error',
      // 强制将 typeof 表达式与有效的字符串字面进行比较
      'valid-typeof': 'error',
      // 对所有控制语句强制执行一致的大括号样式
      curly: 'error',
      // 强制 switch 语句中的 default 子句位于最后
      'default-case-last': 'error',
      /** 强制默认参数在最后 @reason @typescript-eslint/default-param-last */
      'default-param-last': 'off',
      // 要求使用 === 和 !==
      eqeqeq: ['error', 'always'],
      // 要求使用函数表达式而不是函数声明
      'func-style': ['error', 'expression'],
      // 要求 for-in 循环包含 if 语句
      'guard-for-in': 'error',
      // 要求在变量声明中进行初始化
      'init-declarations': ['error', 'always'],
      // 要求逻辑赋值运算符速记
      'logical-assignment-operators': ['error', 'always'],
      // 禁止使用 alert、confirm 和 prompt
      'no-alert': 'error',
      // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
      'no-case-declarations': 'error',
      // 禁止使用 console
      'no-console': ['error', { allow: ['warn', 'error'] }],
      // 不允许删除变量
      'no-delete-var': 'error',
      // 禁止在正则表达式字面开头的斜杠 (/) 之后使用等号 (=)
      'no-div-regex': 'error',
      // 禁止 if 语句中的 return 语句之后的 else 块
      'no-else-return': 'error',
      // 禁止出现空代码块
      'no-empty': 'error',
      // 禁止出现空的函数，允许空的箭头函数 @reason @typescript-eslint/no-empty-function
      'no-empty-function': 'off',
      // 禁止使用 eval()
      'no-eval': 'error',
      // 禁止不必要的布尔转换
      'no-extra-boolean-cast': 'error',
      // 禁止速记类型转换，仅允许使用 !!
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      // 禁止使用隐式 eval()，使用 setTimeout()、setInterval() 或 execScript() 来消除隐含的 eval()
      'no-implied-eval': 'error',
      // 禁止代码后的内联注释
      'no-inline-comments': 'error',
      // 禁止标记语句
      'no-labels': 'error',
      // 禁止不必要的嵌套块
      'no-lone-blocks': 'error',
      // 不允许 if 语句作为 else 块中的唯一语句
      'no-lonely-if': 'off',
      // 禁止在循环语句中包含不安全引用的函数声明 @reason @typescript-eslint/no-loop-func
      'no-loop-func': 'off',
      // 禁止使用链式赋值表达式
      'no-multi-assign': 'error',
      // 禁止多行字符串
      'no-multi-str': 'error',
      // 禁止否定条件
      'no-negated-condition': 'error',
      // 禁止嵌套的三元表达式
      'no-nested-ternary': 'error',
      // 禁止重新分配函数参数
      'no-param-reassign': 'error',
      // 禁止在 return 语句中使用赋值运算符
      'no-return-assign': ['error', 'always'],
      // 禁止使用逗号运算符
      'no-sequences': 'error',
      // 禁止 throw 字面量，必须 throw 一个 Error 对象
      'no-throw-literal': 'error',
      // 不允许将变量初始化为 undefined
      'no-undef-init': 'error',
      // 必须使用 !a 替代 a ? false : true
      'no-unneeded-ternary': 'error',
      // 禁止未使用的表达式 @typescript-eslint/no-unused-expressions
      'no-unused-expressions': 'off',
      // 禁止对 .call() 和 .apply() 进行不必要的调用
      'no-useless-call': 'error',
      // 不允许不必要地使用计算的属性键
      'no-useless-computed-key': 'error',
      // 禁止不必要的字面或模板字面串联
      'no-useless-concat': 'error',
      // 禁止不必要的 return 语句
      'no-useless-return': 'error',
      // 禁止使用 var
      'no-var': 'error',
      // 禁止代码中出现特定的注释标记
      'no-warning-comments': 'error',
      // 必须使用 a = {b} 而不是 a = {b: b}
      'object-shorthand': 'error',
      // 禁止变量申明时用逗号一次申明多个
      'one-var': ['error', 'never'],
      // 尽可能要求或禁止赋值运算符简写
      'operator-assignment': 'error',
      // 回调函数必须使用箭头函数
      'prefer-arrow-callback': 'error',
      // 声明后永远不会重新分配的变量需要 const 声明
      'prefer-const': 'error',
      // 禁止使用 Math.pow 以支持 ** 运算符
      'prefer-exponentiation-operator': 'error',
      // 不允许 parseInt() 和 Number.parseInt() 支持二进制、八进制和十六进制字面
      'prefer-numeric-literals': 'error',
      // 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
      'prefer-object-has-own': 'error',
      // 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
      'prefer-object-spread': 'error',
      // Promise 的 reject 中必须传入 Error 对象，而不是字面量
      'prefer-promise-reject-errors': 'error',
      // 优先使用正则表达式字面量，而不是 RegExp 构造函数
      'prefer-regex-literals': 'error',
      // 必须使用 ...args 而不是 arguments
      'prefer-rest-params': 'error',
      // 必须使用 ... 而不是 apply
      'prefer-spread': 'error',
      // 必须使用模版字符串而不是字符串连接
      'prefer-template': 'error',
      // 要求在对象的字面属性名称周围加引号
      'quote-props': ['error', 'always'],
      // parseInt 必须传入第二个参数
      radix: 'error',
      // 禁止没有 await 表达式的异步函数
      'require-await': 'error',
      // 禁止严格模式指令
      strict: ['error', 'never'],
      // 必须使用 if (foo === 5) 而不是 if (5 === foo)
      yoda: 'error',

      /* ===== typescript ===== */

      // 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      // 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      // 优先使用 interface 而不是 type
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // 强制默认参数在最后 @reason default-param-last
      '@typescript-eslint/default-param-last': 'error',
      // 接口中的方法必须用属性的方式定义
      '@typescript-eslint/method-signature-style': 'error',
      // 禁止使用容易混淆的非空断言
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      // 禁止出现空的函数，允许空的箭头函数 @reason @typescript-eslint/no-empty-function
      '@typescript-eslint/no-empty-function': 'error',
      // 无空对象类型
      '@typescript-eslint/no-empty-object-type': 'error',
      // 禁止any类型
      '@typescript-eslint/no-explicit-any': 'error',
      // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
      '@typescript-eslint/no-inferrable-types': 'error',
      // 禁止在循环语句中包含不安全引用的函数声明 @reason no-loop-func
      '@typescript-eslint/no-loop-func': 'error',
      // 禁止未使用的表达式 @reason no-unused-expressions
      '@typescript-eslint/no-unused-expressions': 'error',
      // 止未使用的变量 @reason no-unused-vars
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      // 禁止在定义变量之前使用变量 @reason no-use-before-define
      '@typescript-eslint/no-use-before-define': 'error',
      // 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
      '@typescript-eslint/prefer-for-of': 'error',
      // 使用函数类型别名替代包含函数调用声明的接口
      '@typescript-eslint/prefer-function-type': 'error',

      /* ===== vue ===== */

      // 禁止在模版中使用 eslint-disable-next-line 等注释
      'vue/comment-directive': 'error',
      // 组件名称必须是两个以上的单词
      'vue/multi-word-component-names': 'off',
      // 禁止重复属性
      'vue/no-duplicate-attributes': 'error',
      // 禁止修改组件的 props
      'vue/no-mutating-props': 'error',
      // 禁止定义在 components 中的组件未使用
      'vue/no-unused-components': 'error',
      // 不允许 v-for 指令或 scope 属性的未使用的变量定义
      'vue/no-unused-vars': 'error',
      // 不允许在与 v-for 相同的元素上使用 v-if
      'vue/no-use-v-if-with-v-for': 'error',
      // 必须导入 vue 而不是 @vue/*
      'vue/prefer-import-from-vue': 'error',
      // 使用带连字符的属性名称
      'vue/attribute-hyphenation': 'error',
      // 强制组件定义名称采用帕斯卡大小写
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      // 强制模板中每行包含一定数量的属性
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      // 将 props 中的属性名称强制为驼峰式大小写
      'vue/prop-name-casing': ['error', 'camelCase'],
      // 要求在 props 中定义类型
      'vue/require-prop-types': 'error',
      // 必须使用 v-on 的简写
      'vue/v-on-style': ['error', 'shorthand'],
      // 标签属性必须按规则排序
      'vue/attributes-order': 'error',
      // 组件中必须按照 <script>, <template>, <style> 排序
      'vue/component-tags-order': [
        'error',
        { order: [['script', 'template'], 'style'] },
      ],
      // 不允许不必要的 <template>
      'vue/no-lone-template': 'error',
      // 不允许静态内联样式属性
      'vue/no-static-inline-styles': [
        'error',
        {
          allowBinding: false,
        },
      ],
      // 禁止未使用的 ref
      'vue/no-unused-refs': 'error',
      // 强制使用 defineOptions 而不是默认导出
      'vue/prefer-define-options': 'error',
      // 禁止 <template> <script> <style> 为空
      'vue/no-empty-component-block': 'error',

      /* ===== import ===== */

      // 禁止任何无效的导出，即重新导出相同的名称
      'import/export': 'error',
      // 禁止导入标有 @deprecated 文档标签的名称
      'import/no-deprecated': 'warn',
      // 禁止空的命名 import 块
      'import/no-empty-named-blocks': 'error',
      // 禁止导入未在 `package.json` 中声明的依赖
      'import/no-extraneous-dependencies': 'error',
      // 禁止将可变导出与 var 或 let 一起使用
      'import/no-mutable-exports': 'error',
      // 禁止使用导出的名称作为默认导出的标识符
      'import/no-named-as-default': 'error',
      // 禁止将导出的名称用作默认导出的属性
      'import/no-named-as-default-member': 'error',
      // 确保默认导入可以被正确解析
      'import/default': 'error',
      // 确保命名导入可以被正确解析
      'import/named': 'error',
      // 确保命名空间导入（`import * as ...`）解析成功
      'import/namespace': 'error',
      // 禁止使用绝对路径导入模块
      'import/no-absolute-path': 'error',
      // 禁止使用表达式进行 require（） 调用
      'import/no-dynamic-require': 'error',
      // 禁止模块自行导入
      'import/no-self-import': 'error',
      // 禁止导入无法解析的模块
      'import/no-unresolved': ['error', { ignore: ['virtual:.*'] }],
      // 禁止无效或不必要的路径片段
      'import/no-useless-path-segments': 'error',
      // 强制所有导出都在文件底部声明
      'import/exports-last': 'error',
      // 强制文件扩展名的使用规则：不允许为 JS、TS、Vue 文件添加扩展名
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', ts: 'never', vue: 'always' },
      ],
      // 确保所有导入语句出现在文件的顶部
      'import/first': 'error',
      // 首选将命名导出组合到单个导出声明中
      'import/group-exports': 'error',
      // 在 import 语句后强制使用换行符
      'import/newline-after-import': 'error',
      // 禁止在多个位置重复导入同一模块
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      // 禁止命名的默认导出
      'import/no-named-default': 'error',
      'import/no-unassigned-import': [
        'error',
        { allow: ['**/*.css', '**/*.scss'] },
      ],
      // 强制导入顺序规则
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            ['internal', 'unknown'],
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
      // 首选默认导出
      'import/prefer-default-export': 'error',
    },
  },

  // prettier
  eslintPluginPrettierRecommended,

  {
    settings: {
      'import/resolver': {
        // 配置 typescript 模块解析
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.app.json', './tsconfig.node.json'],
        },
        node: {
          extensions: ['.js', '.ts', '.vue'],
        },
      },
    },
  },
];
