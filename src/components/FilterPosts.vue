<template>
	<div class="filter">
		<input class="filter-input" type="text" v-model="searchText" placeholder="Search posts by tags" @keyup="searchByTag">
	</div>
</template>

<script>

export default {
  name: 'Search',
  data() {
      return {
		    searchText: null,
        debounce: null
      }
  },
  methods:{
    searchByTag() {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.$emit('searchByTag', this.searchText);
        }, 300);
    },
  }
}
</script>

<style scoped lang="scss">
	.filter{
    margin-bottom: 20px;
    &-input{
      padding: 5px 10px;
      width: 100%;
      margin-bottom: 10px;
    }
  }
</style>