const owner = document.getElementById("owner");
const group = document.getElementById("group");
const others = document.getElementById("others");
const input = document.getElementById("permiso");

function actualizarPermiso() {
    input.value = owner.value + group.value + others.value;
}

owner.addEventListener("change", actualizarPermiso);
group.addEventListener("change", actualizarPermiso);
others.addEventListener("change", actualizarPermiso);


input.addEventListener("input", () => {

    input.value = input.value.replace(/[^0-7]/g, "");

    input.value = input.value.slice(0, 3);

    const val = input.value;
    owner.value = val[0] || "";
    group.value = val[1] || "";
    others.value = val[2] || "";
});