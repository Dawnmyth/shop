<template>
  <div class="params">
    <ParamsHeader :searchHandle="$api.paramsSearch" />
    <ParamsList />
    <ParamsPagination :total="2" />
  </div>
</template>

<script>
import ParamsList from "./ParamsList";
import ParamsPagination from "../../../components/PubPagination";
import ParamsHeader from "@/components/PubHeader";

export default {
  components: {
    ParamsList,
    ParamsPagination,
    ParamsHeader,
  },
};
</script>

<style scoped>
.params {
  width: 1200px;
  margin: 0 auto;
}
</style>