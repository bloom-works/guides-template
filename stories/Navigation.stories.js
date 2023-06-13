import "./scss/app.scss";

const bootstrapIconXCircle = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
`;

const bootstrapIconBook = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
`;

const bootstrapIconSearch = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
`;

export default {
  title: 'Layout/Navigation',
  args: {
    guideName: 'Employee Handbook',
  },
};

export const Navigation = (args) => `
  <a href="#content" class="skip-link sr-only">Skip to content</a>
  <nav class="nav">
    <div class="l-wrapper">
      <div class="nav-meta">
        <a href="https://bloomworks.digital" class="nav-home"><img src="/images/bloom-logo-graphic.svg" alt="Back to the Bloom Works homepage" /></a>
        <strong>${args.guideName}</strong>
      </div>

      <div class="nav-buttons">
        <button class="nav-search-button">${bootstrapIconSearch}Search</button>
        <button id="all-sections-button">${bootstrapIconBook}All Sections</button>
      </div>
    </div>
  </nav>
  <dialog id="all-sections-modal" class="all-sections-menu">
    <header>
      <span>Jump to a section</span>
      <form method="dialog">
        <button>${bootstrapIconXCircle} <span class="sr-only">Close</button>
      </form>
    </header>
    <section class="dialog-body">
      <ol>
        <li><a href="#">Introduction</a></li>
        <li><a href="#">About Bloom</a></li>
        <li><a href="#">Employment policies</a></li>
        <li><a href="#">How to be the best Bloomer you can be</a></li>
        <li><a href="#">Policy against harassment and discrimination</a></li>
        <li><a href="#">Health, safety and security</a></li>
        <li><a href="#">Expenses and reimbursement procedures</a></li>
        <li><a href="#">Time Off</a></li>
        <li><a href="#">Benefits for Full Time Employees (FTEs)</a></li>
        <li><a href="#">Norms and Best PRactices</a></li>
        <li><a href="#">Calendar Management</a></li>
        <li><a href="#">Meetings</a></li>
        <li><a href="#">Decision Docs</a></li>
        <li><a href="#">Offsites</a></li>
        <li><a href="#">Personal tech issues</a></li>
        <li><a href="#">IT at Bloom</a></li>
        <li><a href="#">Writing style</a></li>
        <li><a href="#">Visual style</a></li>
        <li><a href="#">Email Signature Template</a></li>
        <li><a href="#">Bloom Works resume and portrait instructions</a></li>
        <li><a href="#">Bringing your full self to work</a></li>
        <li><a href="#">Tools</a></li>
        <li><a href="#">Career growth, professional development, and competencies</a></li>
        <li><a href="#">Digital security</a></li>
        <li><a href="#">Business continuity</a></li>
        <li><a href="#">Leaving Bloom</a></li>
        <li><a href="#">Working partners and coalitions</a></li>
        <li><a href="#">Information for contractors</a></li>
        <li><a href="#">Sign here, please!</a></li>
      </ol>
    </section>
  </dialog>

  <script>
    const allSectionsButton = document.querySelector("#all-sections-button");
    const allSectionsModal = document.querySelector("#all-sections-modal");

    allSectionsButton.addEventListener("click", e => {
      allSectionsModal.showModal();
    });
  </script>
`;