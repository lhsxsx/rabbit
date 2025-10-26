import { defineStore } from "pinia";
import {ref} from 'vue'
import {computed} from 'vue'

export const useCartStore= defineStore('cart',()=>{
  const cartList=ref([])
  const addCart=(goods)=>{
    const item=cartList.value.find((item)=>goods.skuId===item.skuId)
    if(item){
      item.count++
  }else{
      cartList.value.push(goods)
    }}
  const delCart=(skuId)=>{
    const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
    cartList.value.splice(idx,1)
  }
  const singleCheck=(skuId,selected)=>{
    const item=cartList.value.find((item)=>skuId===item.skuId)
    if(item){
      item.selected=selected
    }
  }
  const allCount=computed(()=>cartList.value.reduce((a,b)=>a+b.count,0))
  const allPrice=computed(()=>cartList.value.reduce((a,b)=>a+b.count*b.price,0))

  const isAll=computed(()=>cartList.value.every((item)=>item.selected))

  const allCheck=(selected)=>{
    cartList.value.forEach(item=>item.selected=selected)
  }

  const selectedCount=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,b)=>a+b.count,0))
  const selectedPrice=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,b)=>a+b.count*b.price,0))
  return{
  cartList,
  addCart,
  delCart,
  allCount,
  allPrice,
  singleCheck,
  isAll,
  allCheck,
  selectedCount,
  selectedPrice
   }
  },{
    persist:true
  }
)
