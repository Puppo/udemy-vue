<template>
  <div>
    <TheHeader />
    <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <base-card>
      <CourseGoal>
        <template #="slotProps">
          <p>{{ slotProps.item }}</p>
        </template>
      </CourseGoal>
    </base-card>
    <base-card>
      <div>
        <button @click="selectComponent('active-goal')">Active Goal</button>
        <button @click="selectComponent('manage-goal')">Manage Goal</button>

        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </base-card>
    
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import CourseGoal from './components/CourseGoal.vue'

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal
  },
  data() {
    return {
      selectedComponent: 'active-goal',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>