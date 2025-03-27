<script setup lang="ts">
defineOptions({ name: 'About' });

const activities = [
  {
    timestamp: '2023-10-01',
    title: 'Version 2.0.0 Release',
    content:
      'Added new features: user profile customization, dark mode, and performance improvements.',
    type: 'primary',
  },
  {
    timestamp: '2023-09-15',
    title: 'Version 1.2.0 Release',
    content: 'Fixed critical bugs and improved overall stability.',
    type: 'success',
  },
  {
    timestamp: '2023-09-01',
    title: 'Version 1.1.0 Release',
    content: 'Introduced new API endpoints and enhanced security features.',
    type: 'warning',
  },
  {
    timestamp: '2023-08-15',
    title: 'Version 1.0.0 Release',
    content: 'Initial release of the application with core functionality.',
    type: 'info',
  },
  {
    timestamp: '2023-06-15',
    title: 'Version 0.0.1 Release',
    content: 'Initial release of the application with core functionality.',
    type: 'danger',
  },
];
</script>

<template>
  <div class="about">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        placement="top"
        center
        :type="activity.type"
      >
        <el-card>
          <h4>{{ activity.title }}</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.about {
  width: 80%;
  height: 100%;

  h4 {
    margin: 5px 0 10px;
  }

  p {
    margin: 10px 0 5px;
  }
}
</style>
