<template>
  <div>
    <v-card>
      <v-card-title>{{ player.id }}</v-card-title>
      <v-card-subtitle>{{ player.character }}</v-card-subtitle>
      <v-card-text>{{ currentHp }}/{{ maxHp }}</v-card-text>
      <v-card-actions>
        <button onclick="attack()">Attack</button>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class Counter extends Vue {
  eventbus = EventBus.getInstance();
  subscription;

  attack() {
    this.eventbus.attackSubject.next(this.player, this.player.attack, target);
  }

  player = {
    platform: "computer",
    region: "us",
    id: "Player1",
    character: "Ryu",
    maxHp: number,
    currentHp: number,
    attack: {
      name: "Crazy Attack",
      damage: 15,
    }
  }
}
</script>