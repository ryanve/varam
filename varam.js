//ryanve.dev/varam
!function(web, dom) {
  var empty = ""
  var dash = "--"
  var word = /\S+/g
  var what = "data-varam"
  var where = "[data-varam]"
  var first = dom.querySelector || no
  var par = web.URLSearchParams
  var api = par ? varam : no

  function varam(search) {
    var did = false
    var url = new par(search)
    var stack = dom.querySelectorAll(where)
    each(stack, function(scope) {
      var keys = scope.getAttribute(what)
      keys = keys && keys.match(word)
      keys && each(keys, function(key) {
        var value = url.get(key)
        var relay = dash + key
        var style = scope.style
        did = fresh(style, relay, value) || did
      })
    })
    api.state = url.toString()
    return did
  }

  function no() {
    return false
  }

  function flow() {
    return api(location.search)
  }

  function reset() {
    return api(empty)
  }

  function help() {
    console.dir(api)
    return api.state
  }

  function fresh(style, relay, value) {
    var prev = style.getPropertyValue(relay)
    var next = value
    var sync = next ? prev === next : !prev
    sync || style.setProperty(relay, value)
    return !sync
  }

  function each(stack, f) {
    var i = stack.length
    while(i--) f(stack[i])
  }

  var like = "meta[name=varam][content]"
  var elmo = first.call(dom, like)
  var seed = elmo && elmo.content
  var seeded = typeof seed == "string"
  seed = seeded && seed
  api.flow = par ? flow : no
  api.fresh = fresh
  api.help = help
  api.reset = par ? reset : no
  api.state = empty
  par && api(seeded ? seed : location.search)
  api.meta = seeded ? api.state : false
  api.staff = !seeded
  api.stage = seeded ? "meta" : "staff"
  api.via = seeded ? "meta" : "flow"
  web.varam = api
  var common = typeof module != "undefined"
  if (common && module.exports)
    module.exports = api
}(window, document)
