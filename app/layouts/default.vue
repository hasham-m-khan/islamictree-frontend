<script setup lang="ts">
</script>

<template>
  <div class="navbar shadow-sm">
    <div class="navbar-start">
      <div class="drawer">
        <input type="checkbox" id="menu" class="drawer-toggle">

        <!-- MENU SIDEBAR -->
        <div class="drawer-content">
          <label for="menu" class="btn btn-ghost drawer-button">
            <icon name="lucide:align-justify" />
          </label>
        </div>

        <div class="drawer-side antialiased">
          <label for="menu" aria-label="close sidebar" class="drawer-overlay"></label>
          <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <div class="flex">
              <div class="flex items-center flex-1 mb-3">
                <img src="/img/islamictree.svg" alt="Islamic Tree" width="24" height="24" />
                <h2 class="text-xl font-[Patrick_Hand_SC] ms-2">ISLAMICTREE</h2>
              </div>
              <div class="flex-none">
                <icon name="lucide:x" />
              </div>
            </div>
            <div class="card bg-neutral text-neutral-content p-3 mb-8">
              <div class="card-title">Become a Member</div>
              <div class="card-body">
                Get up-to-date information based on your location and statistics! Sign up to save your settings,
                among other benefits!
              </div>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-primary">Sign up</button>
              </div>
            </div>
            <h3 class="font-[Raleway] text-lg">Links</h3>
            <div class="divider mt-0 mb-0"></div>
            <ul class="menu w-72 font-[Montserrat]">
              <li class="mb-2">
                <a>
                  <icon name="lucide:newspaper" />
                  News
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:book-text" />
                  Quran
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:book-text" />
                  Hadith
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:alarm-clock" />
                  Prayer Times
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:shopping-basket" />
                  Ethical Stores
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:pizza" />
                  Halal Items
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:file-text" />
                  Articles
                </a>
              </li>
              <li class="mb-2">
                <a>
                  <icon name="lucide:file-badge" />
                  Biographies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-center">
      <button class="btn btn-success">Sign In</button>
    </div>
    <div class="nav-end">
      <ul class="menu menu-horizontal rounded-box">
        <li><a href="#">
            <icon name="lucide:search" />
        </a></li>
        <li><a href="#">
          <icon name="lucide:bell" />
        </a></li>
      </ul>
    </div>
  </div>

  <slot />

  <div class="dock shadow-sm">
    <button>
      <icon name="heroicons-outline:home" />
      <span class="dock-label">Home</span>
    </button>
    <button>
      <icon name="lucide:globe" />
      <span class="dock-label">Language</span>
    </button>
    <button>
      <label class="swap swap-rotate">
        <input type="checkbox" value="bumblebee" class="theme-controller"/>
        <icon name="lucide:moon"  class="swap-on" />
        <icon name="lucide:sun-medium"  class="swap-off" />
      </label>
      <span class="dock-label">Theme</span>
    </button>
    <button>
      <icon name="lucide:settings" />
      <span class="dock-label">Settings</span>
    </button>
  </div>
</template>

<style scoped>

</style>