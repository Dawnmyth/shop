<template>
    <div class="pagination-container">
        <el-pagination
            layout="prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            :total="total"
            :current-page.sync="currentPage"
            @size-change="handleSizechange"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
        };
    },
    props:{
        total:{
            type:[String,Number],
            default:0
        }
    },
    methods: {
        handleSizechange() {},
        handleCurrentChange(val) {
            this.$bus.$emit("page",val)
        },
    },
};
</script>

<style scoped>

.pagination-container{
    margin-top: 40px;
}

</style>