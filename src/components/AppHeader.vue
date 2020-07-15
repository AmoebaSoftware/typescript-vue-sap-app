<template>
  <fd-shell-bar>
    <fd-shell-bar-group position="start">
      <fd-shell-bar-logo
        alt="SAP"
        v-bind:src="logo"
        width="48"
        height="24"
      />
      <fd-shell-bar-product productTitle="Product Name" />
    </fd-shell-bar-group>
    <fd-shell-bar-group position="end">
      <fd-shell-bar-actions>
        <fd-shell-bar-action>
          <fd-shell-bar-user-menu ref="userMenu">
            <fd-menu>
              <fd-menu-list>
                <fd-menu-item @click="closeUserMenu">
                  Settings
                </fd-menu-item>
                <fd-menu-item @click="closeUserMenu">
                  Sign out
                </fd-menu-item>
              </fd-menu-list>
            </fd-menu>
          </fd-shell-bar-user-menu>
        </fd-shell-bar-action>
      </fd-shell-bar-actions>
    </fd-shell-bar-group>
  </fd-shell-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class AppHeader extends Vue {
  private logo = require('../assets/sap-logo@2x.png');
  $refs!: {
    userMenu: any;
  };

  closeUserMenu(): void {
    this.$refs.userMenu.close();
  }
}
</script>

<style lang="scss" scoped></style>
