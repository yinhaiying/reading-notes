let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

p.then((result) => { }, (error) => { })

