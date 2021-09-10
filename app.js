const app = Vue.createApp({
  data() {
    return {
      todo: [
        {
          label: "Learn v-on",
          done: false,
        },
        {
          label: "learn v-model",
          done: false,
        },
        {
          label: "make VueJs example",
          done: false,
        },
      ],
      task: "",
    };
  },
  methods: {
    addItem(event) {
      items = this.todo.map((o) => o.label);
      this.newTask = event.target.value;
      if (this.task != undefined && this.task != "") {
        if (!items.includes(this.task)) {
          this.todo.push({
            label: this.task.trim(),
            done: false,
          });
          event.target.value = "";
        }
      }
      this.task = "";
    },

    removeItem(index) {
      this.todo.splice(index, 1);
    },

    updateItem(index) {
      items = this.todo.map((o) => o.label);
      if (this.task != undefined && this.task != "") {
        if (!items.includes(this.task)) {
          item = this.todo[index];
          item.label = this.task.trim();
          this.task = "";
        }
      }
    },

    toggleTask(index) {
      item = this.todo[index];
      item.done = !item.done;
    },
  },
});

app.mount("#app");
