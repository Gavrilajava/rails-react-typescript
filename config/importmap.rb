# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "react" # @18.2.0
pin "react-dom" # @18.2.0
pin "scheduler" # @0.23.0
pin "react/jsx-runtime", to: "react--jsx-runtime.js" # @18.2.0


Dir['app/javascript/components/*.{jsx}'].each do |path| 
  path = path.gsub("app/javascript/", '')
  pin path, to: path.gsub(".jsx", '.js')
end
