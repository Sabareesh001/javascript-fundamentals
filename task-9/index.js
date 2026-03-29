// Storage for accumulated shard data
const loadedData = [];

// Fetch and load a shard by number
const loadNextShard = async (shardNumber) => {
  const res = await fetch(`./shards/shard-${shardNumber}.json`).then((res) =>
    res.json(),
  );
  if (res) loadedData.push(...res.data);
  renderBlocks(loadedData);
};

// Render data items as block elements
function renderBlocks(data) {
  const container = document.getElementById("blocksContainer");
  container.innerHTML = "";
  data.forEach((item) => {
    const block = document.createElement("div");
    block.className = "block";

    // Convert tags array to HTML
    const tagsHTML = item.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    block.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="meta">
                <p><strong>Category:</strong> ${item.category}</p>
                <div style="margin-top: 10px;">
                    ${tagsHTML}
                </div>
            </div>
        `;

    container.appendChild(block);
  });
}

// Load initial shards to fill viewport
document.addEventListener("DOMContentLoaded", async () => {
  const body = document.getElementsByTagName("body");
  // Keep loading shards until content exceeds viewport height
  while (body[0].clientHeight <= window.innerHeight) {
    const shardNumber = Math.ceil(loadedData.length / 3) + 1;
    await loadNextShard(shardNumber);
    await loadNextShard(shardNumber + 1);
  }
});

// Load more shards on scroll end (infinite scroll)
document.addEventListener("scrollend", async () => {
  const shardNumber = (Math.ceil(loadedData.length / 3) % 10) + 1;
  await loadNextShard(shardNumber);
  await loadNextShard(shardNumber + 1);
});
