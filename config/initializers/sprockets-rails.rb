class TSXCompiler < Nodo::Core

  require babelCore: '@babel/core',
          pluginTransformTypescript: '@babel/plugin-transform-typescript',
          pluginTransformReactJSX: '@babel/plugin-transform-react-jsx'

  class_function def call(input)
    filename = File.basename(input[:filename])
    source = input[:data]
    { data: compile_component(source, filename) }
  end

  function :compile_component, <<~'JS'
    (source, filename) => {
      let code = '';
      nodo.debug(`Compiling component ${filename}`);

      const result = babelCore.transformSync(source,
        { plugins: [
          ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" } ],
          ["@babel/plugin-transform-typescript", { "isTSX": true, "allExtensions": true } ]
        ]
      }
      );

      return result.code;
    }
  JS

end

Sprockets.register_mime_type 'text/tsx', extensions: %w[.tsx], charset: :unicode
Sprockets.register_transformer 'text/tsx', 'application/javascript', TSXCompiler
