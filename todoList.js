// Jalankan kode setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ELEMENT SELECTOR
  // =========================
  // Ambil elemen-elemen HTML yang dibutuhkan
  const taskInput = document.getElementById("taskInput"); // input untuk nama task
  const newTaskBtn = document.getElementById("newTask"); // tombol tambah task
  const taskList = document.getElementById("task-list"); // container untuk menampilkan task
  const totalTask = document.getElementById("total-task"); // total task
  const completedTask = document.getElementById("completed-task"); // task yang selesai
  const filterButtons = document.querySelectorAll(".filter-btn"); // tombol filter (all, active, completed)
  const priorityOptions = document.querySelectorAll(".priority-option"); // pilihan prioritas (High, Medium, Low)
  const prioritySlider = document.getElementById("priority-slider"); // slider indikator prioritas
  const taskDateInput = document.getElementById("date-input"); // input tanggal task
  const taskTimeInput = document.getElementById("time-input"); // input waktu task

  // =========================
  // VARIABLES
  // =========================
  let tasks = [];

   let currentPriority = "High"; // default priority saat tambah task
  let currentFilter = "all"; // default filter (all)




 

  // =========================
  // FUNCTIONS
  // =========================

  //SIMPAN TASK (BEDA LOGIN vs GUEST)
  const saveTasks = () => {
  if (IS_LOGIN) {
    fetch("todo_api.php", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "save",
        tasks: tasks
      })
    });
  }
  // guest → tidak disimpan
};



  // Update jumlah task dan progress bar
  const updateTaskCount = () => {
    const completed = tasks.filter((t) => t.completed).length; // hitung task yang sudah selesai
    totalTask.textContent = `${tasks.length} tasks`;
    completedTask.textContent = `${completed} completed`;

    // Update progress bar
    const progress = tasks.length === 0 ? 0 : (completed / tasks.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    // Jika semua task selesai, jalankan confetti
    if (tasks.length && completed === tasks.length) launchConfetti();

    // Update angka progress
    document.getElementById(
      "numbers"
    ).innerText = `${completed} / ${tasks.length}`;
  };

  // Render task ke dalam taskList
  const renderTasks = () => {
    taskList.innerHTML = ""; // bersihkan taskList dulu

    // Filter task sesuai filter saat ini
    let filteredTasks = tasks;
    if (currentFilter === "active")
      filteredTasks = tasks.filter((t) => !t.completed);
    else if (currentFilter === "completed")
      filteredTasks = tasks.filter((t) => t.completed);

    // Jika tidak ada task, tampilkan empty state
    if (filteredTasks.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "empty-state";

      if (currentFilter === "all") {
        emptyState.innerHTML = `
          <i class="fas fa-tasks"></i>
          <h3>No tasks here!</h3>
          <p>Add some tasks to get started!</p>
        `;
      } else if (currentFilter === "active") {
        emptyState.innerHTML = `
          <i class="fas fa-clock"></i>
          <h3>No active tasks</h3>
          <p>You're doing great!</p>
        `;
      } else if (currentFilter === "completed") {
        emptyState.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <h3>No completed tasks</h3>
          <p>Complete some tasks to see them here.</p>
        `;
      }

      taskList.appendChild(emptyState);
      updateTaskCount(); // tetap update counter meski empty
      return;
    }

    // Render setiap task
    filteredTasks.forEach((task) => {
      const taskElement = document.createElement("div"); // buat elemen div task
      taskElement.className = `task ${task.completed ? "completed" : ""}`;
      taskElement.dataset.id = task.id; // simpan id task untuk reference

      taskElement.innerHTML = `
        <div class="taskItem">
          <span class="priority-indicator" data-priority="${
            task.priority
          }"></span>
          <input type="checkbox" class="checkTask" ${
            task.completed ? "checked" : ""
          }>
          <div class="task-content">
            <p>${task.text}</p>
            <span class="task-date"><i class="fa-regular fa-calendar"></i> ${
              task.formattedDate || ""
            }</span>
          </div>
        </div>
        <div class="icons">
          <img src="images/edit.png" alt="edit" onclick="editTask(${task.id})">
          <img src="images/bin.png" alt="delete" onclick="deleteTask(${
            task.id
          })">
        </div>
      `;
      taskList.appendChild(taskElement); // masukkan task ke taskList
    });

    updateTaskCount();
    //  pastikan UI filter & priority tetap sinkron (guest / login)
filterButtons.forEach(btn => {
  btn.classList.toggle("active", btn.dataset.filter === currentFilter);
});

priorityOptions.forEach(opt => {
  opt.classList.toggle("selected", opt.dataset.priority === currentPriority);
});

  };
// =========================
// LOAD TASKS (LOGIN / GUEST)
// =========================
if (IS_LOGIN) {
  renderTasks(); // tampilkan empty state dulu
  fetch("todo_api.php?action=load", {
    credentials: "same-origin"
  })
    .then(res => res.json())
    .then(data => {
      tasks = data;
      renderTasks(); //update setelah data datang
    });
} else {
  tasks = [];
  renderTasks();
}

  // Tambah task baru
  const addTask = (text) => {
    if (!text) return; // jika input kosong, tidak melakukan apa-apa

    const date = taskDateInput.value;
    const time = taskTimeInput.value;
    let formattedDate = "";

    if (date) {
      const dateObj = new Date(date);
      formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      if (time) {
        const [hours, minutes] = time.split(":");
        dateObj.setHours(parseInt(hours));
        dateObj.setMinutes(parseInt(minutes));
        formattedDate += ` at ${time}`;
      }
    }

    const newTask = {
      id: IS_LOGIN ? null : Date.now(),
      text: text,
      completed: false,
      priority: currentPriority,
      createdAt: new Date(),
      dueDate: date,
      dueTime: time,
      formattedDate: formattedDate,
    };
    tasks.unshift(newTask); // tambahkan ke awal array
    saveTasks();
    renderTasks();
    updateTaskCount();
    

    // Reset input
    taskInput.value = "";
    taskInput.focus();
  };

  // Edit task
  window.editTask = (id) => {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return;

    taskInput.value = tasks[index].text;
    currentPriority = tasks[index].priority;

    // Hapus task lama sebelum update
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
    taskInput.focus();
  };

  // Delete task
  window.deleteTask = (id) => {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    renderTasks();
  };

  // Toggle status task selesai/belum
  const toggleTaskComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  };

  // Filter task
  const filterTasks = (type) => {
    currentFilter = type;
    renderTasks();
  };

  // Confetti saat semua task selesai
  const launchConfetti = () => {
    confetti({
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.9,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    });
  };

  // =========================
  // EVENT LISTENERS
  // =========================

  // Klik tombol tambah task
  newTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskInput.value.trim());
    taskInput.value = "";
  });

  // Toggle checkbox task
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("checkTask")) {
      const id = parseInt(e.target.closest(".task").dataset.id);
      toggleTaskComplete(id);
    }
  });

  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterTasks(btn.dataset.filter);
    });
  });

  // Priority selector
  priorityOptions.forEach((option) => {
    option.addEventListener("click", () => {
      priorityOptions.forEach((o) => o.classList.remove("selected"));
      option.classList.add("selected");
      currentPriority = option.dataset.priority;

      // Pindahkan slider ke pilihan yang dipilih
      const left = option.offsetLeft;
      prioritySlider.style.transform = `translateX(${left}px)`;
    });
  });

});
