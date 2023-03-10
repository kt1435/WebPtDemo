<template>
  <div>
    <card>
      <title>{{ player.id }}</title>
      <title>{{ player.character }}</title>
      <span>{{ currentHp }}/{{ maxHp }}</span>
      <button onclick="attack()">Attack</button>
    </card>
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
    this.eventbus.attackSubject.next(attack, player, target);
  }

  player = {
    platform: "computer",
    region: "us",
    id: "Player1",
    character: "Ryu",
    maxHp: number,
    currentHp: number,
    attack: {

    }
  }
}
</script>