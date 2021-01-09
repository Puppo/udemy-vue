<template>
    <div>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode" >Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources'
import AddResource from './AddResource'
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Office Guide',
                    description: 'The Official Vue.js Documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google..',
                    link: 'https://google.com'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? '' : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? '' : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, link) {
            this.storedResources.unshift({
                id: new Date().toISOString(),
                title,
                description,
                link
            })
            this.setSelectedTab('stored-resources')
        },
        removeResource(resId) {
            const resIdx = this.storedResources.findIndex(({ id }) => id !== resId)
            this.storedResources.splice(resIdx, 1)
        }
    }
}
</script>

