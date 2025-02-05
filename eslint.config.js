import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 需要检查的文件类型
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },

  // 忽略的文件和目录
  { ignores: ['**/dist/**', '**/node_modules/**'] },

  {
    languageOptions: {
      // 全局变量配置
      globals: { ...globals.browser, ...globals.node, process: 'readonly' },
    },
  },

  // ESLint 配置
  pluginJs.configs.recommended,
  // Typescript 配置
  ...tseslint.configs.recommended,
  // Vue 配置
  ...pluginVue.configs['flat/essential'],
  // Import 配置
  importPlugin.flatConfigs.recommended,

  {
    files: ['**/*.vue'],
    // Vue 文件解析配置
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },

  /**
   * 配置规则级别：
   * - "off" 或 0: 禁用规则
   * - "warn" 或 1: 警告级别，不影响退出代码
   * - "error" 或 2: 错误级别，触发时退出代码为 1
   */
  {
    rules: {
      /* ===== eslint ===== */

      // 在数组方法的回调中强制执行 return 语句
      'array-callback-return': 'error',
      // 要求在构造函数中调用 super()
      'constructor-super': 'error',
      // 强制 for 循环更新子句将计数器移向正确方向
      'for-direction': 'error',
      // 要求 getter 方法返回值
      'getter-return': 'error',
      // 禁止使用异步函数作为 Promise 执行器
      'no-async-promise-executor': 'error',
      // 禁止 await 进入循环
      'no-await-in-loop': 'off',
      // 禁止重新分配类成员
      'no-class-assign': 'error',
      // 禁止与 -0 进行比较
      'no-compare-neg-zero': 'error',
      // 禁止在测试表达式中使用赋值语句，仅当赋值括在括号中时才允许在测试条件中进行赋值
      'no-cond-assign': ['error', 'except-parens'],
      // 禁止重新分配 const 变量
      'no-const-assign': 'error',
      // 禁止操作不影响值的表达式
      'no-constant-binary-expression': 'error',
      // 除带有表达式 true 的 while 循环外，所有循环中不允许使用常量表达式
      'no-constant-condition': ['error', { checkLoops: 'allExceptWhileTrue' }],
      // 不允许从构造函数返回值
      'no-constructor-return': 'error',
      // 禁止在正则表达式中使用控制字符
      'no-control-regex': 'error',
      // 禁止使用 debugger
      'no-debugger': 'error',
      // 禁止 function 定义中的重复参数
      'no-dupe-args': 'error',
      /**
       * 禁止重复的类成员
       * @reason '@typescript-eslint/no-dupe-class-members': 'error'
       */
      'no-dupe-class-members': 'off',
      // 禁止 if-else-if 链中的重复条件
      'no-dupe-else-if': 'error',
      // 禁止对象字面量中的重复键
      'no-dupe-keys': 'error',
      // 禁止在 switch 语句中出现重复测试表达式的 case
      'no-duplicate-case': 'error',
      // 禁止重复模块导入，从导入的模块重新导出需要直接导出
      'no-duplicate-imports': 'off',
      // 不允许在正则表达式中使用空字符类
      'no-empty-character-class': 'error',
      // 不允许空解构模式
      'no-empty-pattern': 'error',
      // 禁止在 catch 条款中重新分配例外情况
      'no-ex-assign': 'error',
      // switch 的 case 内必须有 break, return 或 throw，最后一个 case 语句
      'no-fallthrough': 'error',
      // 禁止重新分配 function 声明
      'no-func-assign': 'error',
      // 禁止对导入的模块进行赋值
      'no-import-assign': 'error',
      // 不允许在嵌套块中声明 function 和 var
      'no-inner-declarations': ['error', 'both'],
      // 不允许在 RegExp 构造函数中使用无效的正则表达式字符串
      'no-invalid-regexp': 'error',
      // 禁止不规则空格
      'no-irregular-whitespace': 'error',
      /**
       * 禁止使用超出 js 精度范围的数字
       * @reason '@typescript-eslint/no-loss-of-precision': 'error'
       */
      'no-loss-of-precision': 'off',
      // 不允许在字符类语法中使用多个代码点组成的字符
      'no-misleading-character-class': 'error',
      // 禁止具有全局非构造函数的 new 运算符
      'no-new-native-nonconstructor': 'error',
      // 不允许将 Math、JSON、Reflect、Atomics 和 Intl 对象作为函数调用
      'no-obj-calls': 'error',
      // 禁止从 Promise 执行器函数返回值
      'no-promise-executor-return': 'error',
      // 不允许直接在对象实例上调用某些 Object.prototype 方法
      'no-prototype-builtins': 'error',
      // 禁止双方完全相同的分配
      'no-self-assign': 'error',
      // 禁止双方完全相同的比较
      'no-self-compare': 'error',
      // 禁止从 setter 返回值
      'no-setter-return': 'error',
      // 不允许稀疏数组
      'no-sparse-arrays': 'error',
      // 禁止在常规字符串中使用模板字面占位符语法
      'no-template-curly-in-string': 'error',
      // 在构造函数中调用 super() 之前禁止 this/super
      'no-this-before-super': 'error',
      // 禁止使用未声明的变量，除非在 /*global */ 注释中提及
      'no-undef': 'error',
      // 不允许混淆多行表达式
      'no-unexpected-multiline': 'error',
      // 禁止未修改的循环条件
      'no-unmodified-loop-condition': 'error',
      // 禁止在 return、throw、continue 和 break 语句后出现无法访问的代码
      'no-unreachable': 'error',
      // 不允许循环体只允许一次迭代
      'no-unreachable-loop': 'error',
      // 不允许 finally 块内的 return、throw、break 和 continue 语句
      'no-unsafe-finally': 'error',
      // 禁止在 in 或 instanceof 运算符的左操作数取反
      'no-unsafe-negation': 'error',
      // 不允许在不允许 undefined 值的上下文中使用可选链接
      'no-unsafe-optional-chaining': 'error',
      // 禁止未使用的私有类成员
      'no-unused-private-class-members': 'error',
      /**
       * 止未使用的变量
       * @reason '@typescript-eslint/no-unused-vars': [
       *           'error',
       *           { vars: 'all', args: 'all', argsIgnorePattern: '^_', caughtErrors: 'none' },
       *         ],
       */
      'no-unused-vars': 'off',
      /**
       * 禁止在定义变量之前使用变量
       * @reason '@typescript-eslint/no-use-before-define': 'error'
       */
      'no-use-before-define': 'off',
      // 不使用值时禁止变量赋值
      'no-useless-assignment': 'off',
      // 禁止在正则表达式中使用无用的反向引用
      'no-useless-backreference': 'error',
      // 禁止因使用 await 或 yield 而导致竞争条件的分配
      'require-atomic-updates': 'off',
      // 不允许与 NaN 进行比较
      'use-isnan': 'error',
      // 强制将 typeof 表达式与有效的字符串字面进行比较
      'valid-typeof': 'error',
      // 在对象和类中强制执行 getter 和 setter 对
      'accessor-pairs': 'error',
      // 箭头函数体周围需要大括号
      'arrow-body-style': 'error',
      // 在定义的范围内强制使用变量
      'block-scoped-var': 'error',
      // 强制执行驼峰命名约定
      camelcase: 'off',
      // 强制或禁止注释首字母大写
      'capitalized-comments': 'off',
      /**
       * 在类的非静态方法中，必须存在对 this 的引用
       * @reason '@typescript-eslint/class-methods-use-this': 'off'
       */
      'class-methods-use-this': 'off',
      // 强制执行程序中允许的最大圈复杂度
      complexity: ['error', { max: 20 }],
      // 要求 return 语句始终返回值
      'consistent-return': 'error',
      // 限制 this 的别名
      'consistent-this': 'error',
      // 对所有控制语句强制执行一致的大括号样式
      curly: 'error',
      // switch 语句必须有 default
      'default-case': 'off',
      // 强制 switch 语句中的 default 子句位于最后
      'default-case-last': 'error',
      /**
       * 强制默认参数在最后
       * @reason '@typescript-eslint/default-param-last': 'error'
       */
      'default-param-last': 'off',
      /**
       * 禁止使用点号来访问属性，使用方括号替代
       * @reason '@typescript-eslint/dot-notation': 'off'
       */
      'dot-notation': 'off',
      // 要求使用 === 和 !==
      eqeqeq: ['error', 'always'],
      // 要求函数名称与分配给它们的变量或属性的名称相匹配
      'func-name-matching': ['error', 'always'],
      // 要求或禁止命名的 function 表达式
      'func-names': 'off',
      // 强制一致使用 function 声明或分配给变量的表达式
      'func-style': 'off',
      // setter 和 getter 必须写在一起
      'grouped-accessor-pairs': 'error',
      // 要求 for-in 循环包含 if 语句
      'guard-for-in': 'error',
      // 不允许指定的标识符
      'id-denylist': 'off',
      // 强制执行最小和最大标识符长度
      'id-length': 'off',
      // 限制变量名必须匹配指定的正则表达式
      'id-match': 'off',
      // 要求或禁止在变量声明中进行初始化
      'init-declarations': 'off',
      // 要求或禁止逻辑赋值运算符速记
      'logical-assignment-operators': 'off',
      // 强制每个文件的最大类数
      'max-classes-per-file': 'off',
      // 强制执行块可以嵌套的最大深度
      'max-depth': ['error', { max: 4 }],
      // 强制每个文件的最大行数
      'max-lines': 'off',
      // 强制每个函数的最大行数
      'max-lines-per-function': 'off',
      // 强制执行回调可以嵌套的最大深度
      'max-nested-callbacks': ['error', { max: 3 }],
      /**
       * 强制执行函数定义中允许的最大参数数量
       * @reason  '@typescript-eslint/max-params': ['error', { max: 3 }]
       */
      'max-params': 'off',
      // 强制执行功能块中允许的最大语句数
      'max-statements': 'off',
      // 不允许连续的行注释，支持块注释，要求块状注释在每行之前有一个对齐的 * 字符
      'multiline-comment-style': ['error', 'starred-block'],
      // 要求构造函数名称以大写字母开头
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: false }],
      // 禁止使用 alert、confirm 和 prompt
      'no-alert': 'error',
      /**
       * 不允许 Array 构造函数
       * @reason '@typescript-eslint/no-array-constructor': 'error'
       */
      'no-array-constructor': 'off',
      // 禁止按位运算符
      'no-bitwise': 'off',
      // 禁止使用 arguments.caller 或 arguments.callee
      'no-caller': 'error',
      // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
      'no-case-declarations': 'error',
      // 禁止使用可能与比较混淆的箭头函数
      'no-confusing-arrow': 'error',
      // 禁止使用 console
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // 禁止使用 continue
      'no-continue': 'off',
      // 不允许删除变量
      'no-delete-var': 'error',
      // 禁止在正则表达式字面开头的斜杠 (/) 之后使用等号 (=)
      'no-div-regex': 'error',
      // 禁止 if 语句中的 return 语句之后的 else 块
      'no-else-return': 'off',
      // 禁止出现空代码块，允许 catch 为空代码块
      'no-empty': ['error', { allowEmptyCatch: true }],
      /**
       * 禁止出现空的函数，允许空的箭头函数
       * @reason '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }]
       */
      'no-empty-function': 'off',
      // 禁止出现空的静态代码块
      'no-empty-static-block': 'error',
      // 禁止使用 foo == null，必须使用 foo === null
      'no-eq-null': 'error',
      // 禁止使用 eval()
      'no-eval': 'error',
      // 禁止扩展原生类型
      'no-extend-native': 'error',
      // 禁止对 .bind() 进行不必要的调用
      'no-extra-bind': 'error',
      // 禁止不必要的布尔转换
      'no-extra-boolean-cast': 'error',
      // 禁止不必要的标签
      'no-extra-label': 'error',
      // 禁止不必要的分号
      'no-extra-semi': 'error',
      // 消除浮动的小数点，只要一个数字值有小数点，小数点之前或之后必须有一个数字
      'no-floating-decimal': 'error',
      // 禁止对全局变量进行赋值
      'no-global-assign': 'error',
      // 禁止速记类型转换，仅允许使用 !!
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      // 不允许在全局作用域内声明
      'no-implicit-globals': 'off',
      // 禁止使用隐式 eval()，使用 setTimeout()、setInterval() 或 execScript() 来消除隐含的 eval()
      'no-implied-eval': 'error',
      // 禁止代码后的内联注释
      'no-inline-comments': 'error',
      /**
       * 禁止在类或类对象之外的地方使用 this
       * @reason '@typescript-eslint/no-invalid-this': 'error'
       */
      'no-invalid-this': 'off',
      // 禁止使用 __iterator__ 属性
      'no-iterator': 'error',
      // 禁止与变量共享名称的标签
      'no-label-var': 'off',
      // 消除 JavaScript 中标签语句的使用
      'no-labels': 'error',
      // 禁止不必要的嵌套块
      'no-lone-blocks': 'error',
      // 不允许 if 语句作为 else 块中的唯一语句
      'no-lonely-if': 'off',
      /**
       * 禁止在循环语句中包含不安全引用的函数声明
       * @reason '@typescript-eslint/no-loop-func': 'off'
       */
      'no-loop-func': 'off',
      /**
       * 禁止幻数
       * @reeason '@typescript-eslint/no-magic-numbers': 'off'
       */
      'no-magic-numbers': 'off',
      // 要求对复杂的表达式使用小括号
      'no-mixed-operators': 'error',
      // 禁止使用链式赋值表达式
      'no-multi-assign': 'error',
      // 禁止多行字符串
      'no-multi-str': 'error',
      // 禁止否定条件
      'no-negated-condition': 'off',
      // 禁止嵌套的三元表达式
      'no-nested-ternary': 'off',
      // 禁止在赋值或比较之外使用 new 运算符
      'no-new': 'error',
      // 禁止使用 Function 对象的 new 运算符
      'no-new-func': 'error',
      // 不允许 Object 构造函数
      'no-new-object': 'error',
      // 禁止对 String、Number 和 Boolean 对象使用 new 运算符
      'no-new-wrappers': 'error',
      // 禁止在字符串字面中使用 \8 和 \9 转义序列
      'no-nonoctal-decimal-escape': 'error',
      // 禁止八进制字面
      'no-octal': 'error',
      // 禁止在字符串字面中使用八进制转义序列
      'no-octal-escape': 'error',
      // 禁止重新分配函数参数
      'no-param-reassign': 'error',
      // 禁止使用一元运算符 ++ 和 --
      'no-plusplus': 'off',
      // 禁止使用 __proto__ 属性
      'no-proto': 'error',
      /**
       * 不允许变量重新声明
       * @reason '@typescript-eslint/no-redeclare': 'error'
       */
      'no-redeclare': 'off',
      // 禁止在正则表达式中使用多个空格
      'no-regex-spaces': 'error',
      // 禁止在导出中指定名称
      'no-restricted-exports': 'off',
      // 禁止指定的全局变量
      'no-restricted-globals': 'off',
      /**
       * 禁止导入指定的模块
       * @reason '@typescript-eslint/no-restricted-imports': 'off'
       */
      'no-restricted-imports': 'off',
      // 禁止某些对象的某些属性
      'no-restricted-properties': 'off',
      // 禁止使用指定的语法
      'no-restricted-syntax': 'off',
      // 禁止在 return 语句中使用赋值运算符
      'no-return-assign': ['error', 'always'],
      // 禁止 javascript: URL
      'no-script-url': 'off',
      // 禁止使用逗号运算符
      'no-sequences': 'error',
      /**
       * 禁止在外部作用域中声明的隐藏变量的变量声明
       * @reason '@typescript-eslint/no-shadow': 'off'
       */
      'no-shadow': 'off',
      // 禁止标识符隐藏受限名称
      'no-shadow-restricted-names': 'error',
      // 禁止三元运算符
      'no-ternary': 'off',
      // 禁止 throw 字面量，必须 throw 一个 Error 对象
      'no-throw-literal': 'error',
      // 不允许将变量初始化为 undefined
      'no-undef-init': 'error',
      // 禁止使用 undefined 作为标识符
      'no-undefined': 'off',
      // 不允许在标识符中使用悬挂下划线
      'no-underscore-dangle': 'off',
      // 必须使用 !a 替代 a ? false : true
      'no-unneeded-ternary': 'off',
      /**
       * 禁止未使用的表达式
       * @reason '@typescript-eslint/no-unused-expressions':  'error'
       */
      'no-unused-expressions': 'off',
      // 禁止未使用的标签
      'no-unused-labels': 'error',
      // 禁止对 .call() 和 .apply() 进行不必要的调用
      'no-useless-call': 'error',
      // 禁止 catch 子句，只有 throw 捕获错误
      'no-useless-catch': 'error',
      // 不允许不必要地使用计算的属性键
      'no-useless-computed-key': 'error',
      // 禁止不必要的字面或模板字面串联
      'no-useless-concat': 'error',
      /**
       * 禁止不必要的构造函数
       * @reason '@typescript-eslint/no-useless-constructor': 'error'
       */
      'no-useless-constructor': 'off',
      // 禁止不必要的转义字符
      'no-useless-escape': 'error',
      // 不允许将导入、导出和解构分配重命名为相同名称
      'no-useless-rename': 'error',
      // 禁止不必要的 return 语句
      'no-useless-return': 'error',
      // 禁止使用 var
      'no-var': 'error',
      // 禁止使用 void
      'no-void': 'error',
      // 禁止代码中出现特定的注释标记
      'no-warning-comments': 'off',
      // 禁止使用 with 语句
      'no-with': 'error',
      // 必须使用 a = {b} 而不是 a = {b: b}
      'object-shorthand': 'off',
      // 禁止变量申明时用逗号一次申明多个
      'one-var': ['error', 'never'],
      // 强制要求变量声明周围有一致的换行线
      'one-var-declaration-per-line': 'off',
      // 尽可能要求或禁止赋值运算符简写
      'operator-assignment': 'off',
      // 回调函数必须使用箭头函数
      'prefer-arrow-callback': 'error',
      // 声明后永远不会重新分配的变量需要 const 声明
      'prefer-const': 'error',
      /**
       * 必须从数组和/或对象进行解构
       * @reason '@typescript-eslint/prefer-destructuring': 'off'
       */
      'prefer-destructuring': 'off',
      // 禁止使用 Math.pow 以支持 ** 运算符
      'prefer-exponentiation-operator': 'off',
      // 在正则表达式中强制使用命名捕获组
      'prefer-named-capture-group': 'off',
      // 不允许 parseInt() 和 Number.parseInt() 支持二进制、八进制和十六进制字面
      'prefer-numeric-literals': 'off',
      // 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
      'prefer-object-has-own': 'off',
      // 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
      'prefer-object-spread': 'error',
      // Promise 的 reject 中必须传入 Error 对象，而不是字面量
      'prefer-promise-reject-errors': 'error',
      // 优先使用正则表达式字面量，而不是 RegExp 构造函数
      'prefer-regex-literals': 'error',
      // 必须使用 ...args 而不是 arguments
      'prefer-rest-params': 'off',
      // 必须使用 ... 而不是 apply
      'prefer-spread': 'off',
      // 必须使用模版字符串而不是字符串连接
      'prefer-template': 'off',
      // 要求在对象的字面属性名称周围加引号
      'quote-props': ['error', 'always'],
      // parseInt 必须传入第二个参数
      radix: 'error',
      // 禁止没有 await 表达式的异步函数
      'require-await': 'error',
      // 强制在正则表达式上使用 u 或 v 标志
      'require-unicode-regexp': 'off',
      // generator 函数内必须有 yield
      'require-yield': 'error',
      // 强制模块内排序的 import 声明
      'sort-imports': 'off',
      // 要求对对象键进行排序
      'sort-keys': 'off',
      // 要求对同一声明块中的变量进行排序
      'sort-vars': 'off',
      // 强制执行注释 // 或 /* 后至少一个空格
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      // 禁止严格模式指令
      strict: ['error', 'never'],
      // 创建 Symbol 时必须传入参数
      'symbol-description': 'error',
      // 要求 var 声明放在其包含范围的顶部
      'vars-on-top': 'off',
      // 必须使用 if (foo === 5) 而不是 if (5 === foo)
      yoda: ['error', 'never', { onlyEquality: true }],
      // 元素内部或元素之间有换行，则需要换行
      'array-bracket-newline': ['error', { multiline: true }],
      // 数组括号内需要一个或多个空格或换行，禁止数组字面量和其数组字面量元素的括号 [[ 或 ``]]` 间的空格
      'array-bracket-spacing': ['error', 'always', { arraysInArrays: false }],
      // 要求箭头函数的箭头（=>）前后有空格
      'arrow-spacing': ['error', { before: true, after: true }],
      // 要求打开块之后和关闭块之前禁止或强制块内有空格
      'block-spacing': ['error', 'always'],
      // 要求一个块的开头大括号与它对应的语句或声明放在同一行中
      'brace-style': ['error', '1tbs'],
      // 强制要求在对象和数组字面上统一使用尾随逗号
      'comma-dangle': 'off',
      // 不允许在逗号前有空格，要求在逗号后有一个或多个空格
      'comma-spacing': ['error', { before: false, after: true }],
      // 求在数组元素、对象属性或变量声明之后并在同一行中使用逗号
      'comma-style': ['error', 'last'],
      // 不允许在计算属性的括号内有空格，将此规则应用于类成员
      'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
      // 要求成员表达式中的点应该与对象部分在同一行
      'dot-location': ['error', 'object'],
      // 不允许在函数名和括号开头之间有空格
      'func-call-spacing': ['error', 'never'],
      // 要求函数参数之间一致使用换行符
      'function-call-argument-newline': ['error', 'consistent'],
      // 不允许在箭头函数体前有换行
      'implicit-arrow-linebreak': ['error', 'beside'],

      /* ===== typescript ===== */

      // 重载的函数必须写在一起
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      // 限制数组类型必须使用 Array<T> 或 T[]
      '@typescript-eslint/array-type': 'off',
      // 禁止对没有 then 方法的对象使用 await
      '@typescript-eslint/await-thenable': 'off',
      // 禁止使用 // @ts-expect-error @ts-ignore // @ts-nocheck // @ts-check
      '@typescript-eslint/ban-ts-comment': 'off',
      // 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
      '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
      /**
       * 在类的非静态方法中，必须存在对 this 的引用
       * @reason 'class-methods-use-this': 'off'
       */
      '@typescript-eslint/class-methods-use-this': 'off',
      // 使用 Map 或 Set 时，必须在构造函数上用泛型定义类型
      '@typescript-eslint/consistent-generic-constructors': 'off',
      // 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      // 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      // 优先使用 interface 而不是 type
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // 强制类型导出的一致使用
      '@typescript-eslint/consistent-type-exports': 'off',
      // 必须使用 import type 导入类型
      '@typescript-eslint/consistent-type-imports': 'error',
      /**
       * 强制默认参数在最后
       * @reason 'default-param-last': 'off'
       */
      '@typescript-eslint/default-param-last': 'error',
      /**
       * 禁止使用点号来访问属性，使用方括号替代
       * @reason 'dot-notation': 'off'
       */
      '@typescript-eslint/dot-notation': 'off',
      // 要求函数和类方法有明确的返回类型
      '@typescript-eslint/explicit-function-return-type': 'off',
      // 要求在类属性和方法上使用显式可访问性修饰符
      '@typescript-eslint/explicit-member-accessibility': 'error',
      // 要求导出函数和类的公共类方法具有明确的返回和参数类型
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      /**
       * 要求或禁止在变量声明中进行初始化
       * @reason 'init-declarations': 'off'
       */
      '@typescript-eslint/init-declarations': 'off',
      /**
       * 强制执行函数定义中允许的最大参数数量
       * @reason 'max-params': 'off'
       */
      '@typescript-eslint/max-params': ['error', { max: 3 }],
      // 要求一致的成员声明顺序
      '@typescript-eslint/member-ordering': 'error',
      // 接口中的方法必须用属性的方式定义
      '@typescript-eslint/method-signature-style': 'error',
      // 对代码库中的所有内容强制执行命名约定
      '@typescript-eslint/naming-convention': 'off',
      /**
       * 不允许 Array 构造函数
       * @reason 'no-array-constructor': 'off'
       */
      '@typescript-eslint/no-array-constructor': 'error',
      // 禁止使用容易混淆的非空断言
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      /**
       * 禁止重复的类成员
       * @reason 'no-dupe-class-members': 'off'
       */
      '@typescript-eslint/no-dupe-class-members': 'error',
      // 不允许重复的枚举成员值
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      // 禁止 delete 时传入的 key 是动态的
      '@typescript-eslint/no-dynamic-delete': 'off',
      /**
       * 禁止出现空的函数，允许空的箭头函数
       * @reason '@typescript-eslint/no-empty-function': 'off'
       */
      '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      // 禁止意外使用“空对象”类型
      '@typescript-eslint/no-empty-object-type': 'error',
      // 禁止any类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 禁止额外的非空断言
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      // 禁止将类用作命名空间
      '@typescript-eslint/no-extraneous-class': 'off',
      // 禁止使用 for-in 循环迭代数组
      '@typescript-eslint/no-for-in-array': 'error',
      // 当导入仅具有带有内联类型限定符的说明符时，强制使用顶级导入类型限定符
      '@typescript-eslint/no-import-type-side-effects': 'error',
      // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
      '@typescript-eslint/no-inferrable-types': 'error',
      /**
       * 禁止在类或类对象之外的地方使用 this
       * @reason 'no-invalid-this': 'off'
       */
      '@typescript-eslint/no-invalid-this': 'error',
      // 不允许使用void泛型或返回类型之外的类型
      '@typescript-eslint/no-invalid-void-type': 'error',
      /**
       * 禁止在循环语句中包含不安全引用的函数声明
       * @reason 'no-loop-func': 'off'
       */
      '@typescript-eslint/no-loop-func': 'off',
      /**
       * 禁止使用超出 js 精度范围的数字
       * @reason 'no-loss-of-precision': 'off'
       */
      '@typescript-eslint/no-loss-of-precision': 'error',
      /**
       * 禁止幻数
       * @reeason 'no-magic-numbers': 'off'
       */
      '@typescript-eslint/no-magic-numbers': 'off',
      // 禁止使用void运算符，除非用于丢弃值
      '@typescript-eslint/no-meaningless-void-operator': 'off',
      // 执行有效的定义new和constructor
      '@typescript-eslint/no-misused-new': 'error',
      // 禁止对类型表明这样做可能会导致意外行为的值使用扩展语法
      '@typescript-eslint/no-misused-spread': 'off',
      // 禁止枚举同时具有数字和字符串成员
      '@typescript-eslint/no-mixed-enums': 'off',
      // 禁止 TypeScript 命名空间，但是允许使用 declare namespace ... {} 来定义外部命名空间
      '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
      // 不允许在空值合并运算符的左操作数中使用非空断言
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      // 不允许使用后缀运算符的非空断言!
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      /**
       * 不允许变量重新声明
       * @reason 'no-redeclare': 'off'
       */
      '@typescript-eslint/no-redeclare': 'error',
      // 禁止调用require()
      '@typescript-eslint/no-require-imports': 'error',
      /**
       * 禁止导入指定的模块
       * @reason 'no-restricted-imports': 'off'
       */
      '@typescript-eslint/no-restricted-imports': 'off',
      // 禁止某些类型
      '@typescript-eslint/no-restricted-types': 'off',
      /**
       * 禁止在外部作用域中声明的隐藏变量的变量声明
       * @reason 'no-shadow': 'off'
       */
      '@typescript-eslint/no-shadow': 'off',
      // 禁止将 this 赋值给其他变量，除非是解构赋值
      '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
      // 禁止对构造函数属性参数进行不必要的赋值
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
      // 禁止不必要的命名空间限定符
      '@typescript-eslint/no-unnecessary-qualifier': 'off',
      // 禁止无用的类型声明
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      // 禁止未多次使用的类型参数
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      // 禁止 class 和 interface 合并类型
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      // 禁止使用不安全的内置函数类型
      '@typescript-eslint/no-unsafe-function-type': 'error',
      // 不允许缩小类型的类型断言
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      // 要求使用一元否定来取数字
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      /**
       * 禁止未使用的表达式
       * @reason 'no-unused-expressions': 'off'
       */
      '@typescript-eslint/no-unused-expressions': 'error',
      /**
       * 止未使用的变量
       * @reason 'no-unused-vars': 'off'
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'all', argsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      /**
       * 禁止在定义变量之前使用变量
       * @reason 'no-use-before-define': 'off'
       */
      '@typescript-eslint/no-use-before-define': 'error',
      /**
       * 禁止不必要的构造函数
       * @reason 'no-useless-constructor': 'off'
       */
      '@typescript-eslint/no-useless-constructor': 'error',
      // 禁止导出空对象
      '@typescript-eslint/no-useless-empty-export': 'off',
      // 无包装对象类型
      '@typescript-eslint/no-wrapper-object-types': 'error',
      // 必须使用 ! 而不是 as
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      // 类的构造函数参数作为类属性时，必须加上可访问性修饰符
      '@typescript-eslint/parameter-properties': 'off',
      // 强制使用 as const 替代 as 'bar'
      '@typescript-eslint/prefer-as-const': 'error',
      /**
       * 必须从数组和/或对象进行解构
       * @reason 'prefer-destructuring': 'off'
       */
      '@typescript-eslint/prefer-destructuring': 'off',
      // 要求每个枚举成员值明确初始化
      '@typescript-eslint/prefer-enum-initializers': 'off',
      // 当查找单个结果时，强制使用 Array.prototype.find() 而不是 Array.prototype.filter() 后跟 [0]
      '@typescript-eslint/prefer-find': 'off',
      // 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
      '@typescript-eslint/prefer-for-of': 'error',
      // 使用函数类型别名替代包含函数调用声明的接口
      '@typescript-eslint/prefer-function-type': 'error',
      // 使用 includes 而不是 indexOf
      '@typescript-eslint/prefer-includes': 'off',
      // 要求所有枚举成员都是文字值
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      // 要求使用namespace关键字而非module关键字来声明自定义 TypeScript 模块
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
      '@typescript-eslint/prefer-readonly': 'off',
      // 函数的参数必须设置为 readonly
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      // 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
      '@typescript-eslint/prefer-reduce-type-parameter': 'off',
      // 使用 RegExp#exec 而不是 String#match
      '@typescript-eslint/prefer-regexp-exec': 'off',
      // 类的方法返回值是 this 时，类型必须设置为 this
      '@typescript-eslint/prefer-return-this-type': 'off',
      // 使用 String#startsWith 而不是其它方式
      '@typescript-eslint/prefer-string-starts-ends-with': 'off',
      // async 函数的返回值必须是 Promise
      '@typescript-eslint/promise-function-async': 'off',
      // 强制get()类型应该可分配给其等效set()类型
      '@typescript-eslint/related-getter-setter-pairs': 'off',
      // 使用 sort 时必须传入比较函数
      '@typescript-eslint/require-array-sort-compare': 'off',
      // 联合类型和交叉类型必须排序
      '@typescript-eslint/sort-type-constituents': 'off',
      // 禁止使用三斜杠导入文件
      '@typescript-eslint/triple-slash-reference': 'error',
      // 在某些地方需要类型注释
      '@typescript-eslint/typedef': 'error',
      // 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
      '@typescript-eslint/unified-signatures': 'error',
      // 强制使用unknownPromise 拒绝回调的参数类型
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

      /* ===== vue ===== */

      // 标签属性必须按规则排序
      'vue/attributes-order': 'error',
      // 禁止在模版中使用 eslint-disable-next-line 等注释
      'vue/comment-directive': 'error',
      // 组件的 name 属性必须符合 PascalCase
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      // 组件中必须按照 <script>, <template>, <style> 排序
      'vue/component-tags-order': ['error', { order: [['script', 'template'], 'style'] }],
      // 自定义事件名必须用 camelCase 风格
      'vue/custom-event-name-casing': 'error',
      // 必须按规则排序 defineEmits 和 defineProps
      'vue/define-macros-order': 'error',
      // 组件名称必须是两个以上的单词
      'vue/multi-word-component-names': 'off',
      // 组件的 name 属性禁止使用保留字
      'vue/no-reserved-component-names': 'error',
      // 禁止 <template> <script> <style> 为空
      'vue/no-empty-component-block': 'error',
      // 禁止修改组件的 props
      'vue/no-mutating-props': 'error',
      // 禁止出现语法错误
      'vue/no-parsing-error': 'error',
      // 禁止在数组中出现连续的逗号
      'vue/no-sparse-arrays': 'error',
      // 禁止使用 style 属性
      'vue/no-static-inline-styles': 'error',
      // 禁止定义在 components 中的组件未使用
      'vue/no-unused-components': 'error',
      // 禁止未使用的 ref
      'vue/no-unused-refs': 'error',
      // 组件的属性必须为一定的顺序
      'vue/order-in-components': 'error',
      // 强制使用 defineOptions 而不是默认导出
      'vue/prefer-define-options': 'error',
      // 必须导入 vue 而不是 @vue/*
      'vue/prefer-import-from-vue': 'error',
      // 使用缩写的 : 而不是 v-bind:
      'vue/v-bind-style': 'error',
      // 使用缩写的 @click 而不是 v-on:click
      'vue/v-on-style': 'error',
      // 属性名必须合法
      'vue/valid-attribute-name': 'error',
      // 强制执行有效的 defineOptions 编译器宏
      'vue/valid-define-options': 'error',
      // model 的属性名必须合法
      'vue/valid-model-definition': 'error',
      // template 的根节点必须合法
      'vue/valid-template-root': 'error',
      // v-bind 指令必须合法
      'vue/valid-v-bind': 'error',
      // v-cloak 指令必须合法
      'vue/valid-v-cloak': 'error',
      // v-else 指令必须合法
      'vue/valid-v-else': 'error',
      // v-else-if 指令必须合法
      'vue/valid-v-else-if': 'error',
      // v-for 指令必须合法
      'vue/valid-v-for': 'error',
      // v-html 指令必须合法
      'vue/valid-v-html': 'error',
      // v-if 指令必须合法
      'vue/valid-v-if': 'error',
      // v-is 指令必须合法
      'vue/valid-v-is': 'error',
      // valid-v-memo 指令必须合法
      'vue/valid-v-memo': 'off',
      // v-model 指令必须合法
      'vue/valid-v-model': 'error',
      // v-on 指令必须合法
      'vue/valid-v-on': 'error',
      // v-once 指令必须合法
      'vue/valid-v-once': 'error',
      // v-pre 指令必须合法
      'vue/valid-v-pre': 'error',
      // v-show 指令必须合法
      'vue/valid-v-show': 'error',
      // v-slot 指令必须合法
      'vue/valid-v-slot': 'error',
      // v-text 指令必须合法
      'vue/valid-v-text': 'error',

      /* ===== import ===== */

      // 强制导出和导入的规则一致，避免错误的导入/导出使用
      'import/export': 'error',
      // 警告使用已废弃的导入，确保代码的可维护性
      'import/no-deprecated': 'warn',
      // 禁止空的命名导入块，确保代码结构清晰
      'import/no-empty-named-blocks': 'warn',
      // 确保默认导入可以被正确解析
      'import/default': 'error',
      // 确保命名导入可以被正确解析
      'import/named': 'error',
      // 确保命名空间导入（`import * as ...`）解析成功
      'import/namespace': 'error',
      // 禁止导入无法解析的模块，避免潜在的运行时错误
      'import/no-unresolved': ['error', { ignore: ['virtual:.*'] }],
      // 禁止使用绝对路径导入模块，确保模块路径相对或基于项目根目录
      'import/no-absolute-path': 'error',
      // 禁止动态 `require` 调用，避免不明确的模块解析
      'import/no-dynamic-require': 'error',
      // 禁止模块自我导入，避免循环依赖或逻辑错误
      'import/no-self-import': 'error',
      // 禁止重复导入相同的模块，保持代码简洁
      'import/no-duplicates': 'error',
      // 禁止无效或不必要的路径片段，提升代码可读性
      'import/no-useless-path-segments': 'error',
      // 禁止使用 webpack loader 语法在导入中指定加载器
      'import/no-webpack-loader-syntax': 'error',
      // 禁止导入未在 `package.json` 中声明的依赖，保持依赖关系明确
      'import/no-extraneous-dependencies': 'error',
      // 警告循环依赖，默认最大深度为 5，帮助识别复杂依赖关系
      'import/no-cycle': ['warn', { maxDepth: 5 }],
      // 确保所有导入语句出现在文件的顶部，遵循最佳实践
      'import/first': 'error',
      // 导入后必须保留一行空行，提升代码块的可读性
      'import/newline-after-import': 'error',
      // 强制文件扩展名的使用规则：不允许为 JS、TS、Vue 文件添加扩展名
      'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never', vue: 'never' }],
      // 强制导入顺序规则，确保模块按分组顺序排列
      'import/order': [
        'error',
        {
          groups: ['builtin', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            { pattern: 'vue', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      // 禁止使用命名空间导入（`import * as ...`），提升代码可读性和维护性
      'import/no-namespace': 'off',
      // 强制所有导出语句在文件末尾，保持代码结构一致
      'import/exports-last': 'off',
      // 允许使用命名导出，不强制默认导出
      'import/prefer-default-export': 'off',
    },
  },

  // Prettier 推荐配置，确保代码格式化规则
  eslintPluginPrettierRecommended,

  {
    settings: {
      'import/resolver': {
        // 配置 TypeScript 模块解析
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.app.json', './tsconfig.node.json'],
        },
      },
    },
  },
];
