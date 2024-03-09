<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Flight Reassignment</template>

    <p>Allows you to reassign planes and crews in response to flight cancellations or disruptions</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Passenger Management</template>

    <p>Allows you to manage passenger information to provide assistance to affected customers during flight disruptions</p>

    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Live Chat</template>

    <p>Allows you to interact with the customers to know their details to help you in rescheduling their flight efficiently</p>
  </WelcomeItem>

</template>
