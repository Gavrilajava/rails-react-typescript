# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin 'react' # @18.2.0
pin 'react-dom' # @18.2.0
pin 'scheduler' # @0.23.0
pin 'react/jsx-runtime', to: 'react--jsx-runtime.js' # @18.2.0


Dir['app/javascript/components/**/*'].each do |path|
  path = path.sub('app/javascript/', '')
  key = path.sub(/(\.jsx|\.tsx|\.ts)/, '')
  source = path.sub(/(\.jsx|\.tsx|\.ts)/, '.js')
  pin key, to: source
end

pin 'index.js', to: 'index.js'
