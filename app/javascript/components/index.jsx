document.addEventListener('DOMContentLoaded', async () => {

  const reactContainersNodelist = document.querySelectorAll('[data-behavior="react"]')

  if (reactContainersNodelist.length) {

    const React = await import('react')
    const ReactDOM = await import('react-dom')

    const reactContainers = Array.prototype.slice.call(reactContainersNodelist).reduce((result, el) => {

      result[el.dataset.component] ||= []
      result[el.dataset.component].push(el)
      return result

    }, {})

    const App = (Component, props) => {

      return (
        <div>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
          </React.Suspense>
        </div>
      )

    }

    Object.entries(reactContainers).forEach(([path, nodes]) => {

      const Component = React.lazy(() => import(path))

      for (const node of nodes) {

        ReactDOM.render(App(Component, JSON.parse(node.dataset.props)), node)

      }

    })

  }
})
