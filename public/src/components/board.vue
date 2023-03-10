<template>
    <div>
        <Player></Player>
        <Attack v-if="isAttacking"></Attack>
    </div>
</template>
  
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { EventBus } from '../static/eventbus';
import { iPlayer, iAttack } from '../interfaces/models';
import { Subscription } from 'rxjs';

@Component
export default class Board extends Vue {
    eventbus = EventBus.getInstance();
    subscription;
    isAttacking = false;

    handleAttack(attacker, attack) {
        this.isAttacking = true;
    }

    mounted() {
        this.subscription = this.eventbus.attackSubject.subscribe((attacker, attack, target) => {
            this.handleAttack(attacker, attack, target);
        })
    }

    beforeDestroy() {
        this.subscription.unsubscribe();
    }
}
</script>