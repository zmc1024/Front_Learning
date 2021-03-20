// 响应式数据更新
  // 触发 Watcher 观察者里面的回调 vm._update 函数，去通知页面更新
  // 这个过程中 vm._render() 生成 vnode 的
  // vm._update 就会带着新的 vnode 去触发 __path__ 过程 (虚拟dom和真实dom比较)
  // index 做 key 触发 __path__ 过程 有问题

  vn = {
    target: 'ul',
    children: [
      {target: 'li', children: [{ vnode: { text: '1'}}]},
      {target: 'li', children: [{ vnode: { text: '2'}}]}
    ]
  }
  
// diff算法存在的根本意义：提高节点的复用性，提高vue框架的效率，降低性能的消耗
  // __path__ 过程：
  // 1.对比新旧节点是否是相同的节点 （isSameNode）  diff算法的同层对比
    // - 不是相同节点  isSameNode = false，直接销毁旧的vnode，渲染新的vnode
    // - 如果节点相同，要尽可能地做节点的复用
    // - 如果新vnode只是文字vnode，就直接调用浏览器的api替换文字
    // - 如果新的vnode有children，旧的vnode没有，直接addvnode新的子节点
    // - 如果旧的vnode有children，而新的vnode没有，直接removeVnode移除旧的子节点

  // diff核心比较：
    let oldStartIdx = 0   // 旧首节点
    let newStartIdx = 0   // 新首节点

    let oldEndInx = oldCh.length - 1    // 旧尾节点
    let newEndInx = newCh.length - 1    // 新尾节点
  
  // function sameVnode(a, b) {
  //   return (
  //     a.key === b.key && (
  //       (
  //         a.tag === b.tag && 
  //         a.isComment === b.isComment && 
  //         isDef(a.data) === isDef(b.data) &&
  //         sameInputType(a, b)
  //       )
  //     )
  //   )
  // }
