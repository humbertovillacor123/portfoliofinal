function Section({ title, children }) {
    return (
      <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
  
        <h2 className="text-xl font-bold relative pl-4 border-l-2 border-gray-300 md:col-span-1">
          {title}
        </h2>
  
  
        <div className="space-y-6 md:col-span-3">{children}</div>
      </div>
    );
  }
  
  function ToolItem({ name, description }) {
    return (
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">{name}</h3>
  
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
      </div>
    );
  }
  
  export default function Uses() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Here is a list of my favorite tools and devices that help me get my work done efficiently.
        </p>
  
  
        <Section title="Workstation">
          <ToolItem name="Laptop" description="High-performance laptop for all my development needs." />
          <ToolItem name="Monitor" description="27-inch 4K display for clear and crisp visuals." />
          <ToolItem name="Keyboard" description="Mechanical keyboard with tactile switches." />
          <ToolItem name="Mouse" description="Ergonomic mouse for all-day comfort." />
          <ToolItem name="Docking Station" description="To connect all peripherals seamlessly." />
        </Section>
  
  
        <Section title="Development tools">
          <ToolItem name="VSCode" description="My go-to code editor with tons of extensions." />
          <ToolItem name="GitHub" description="For version control and collaboration." />
          <ToolItem name="Postman" description="API testing tool for smooth development." />
          <ToolItem name="Terminal" description="iTerm2 with Zsh and Oh-My-Zsh for a smooth terminal experience." />
          <ToolItem name="Docker" description="Container platform for consistent development." />
        </Section>
  
  
        <Section title="Design">
          <ToolItem name="Figma" description="Design tool for creating wireframes and UI mockups." />
          <ToolItem name="Adobe XD" description="Vector-based design tool for web and mobile apps." />
        </Section>
  
        
        <Section title="Productivity">
          <ToolItem name="Notion" description="All-in-one workspace for notes, tasks, and collaboration." />
          <ToolItem name="Slack" description="Messaging app for seamless team communication." />
          <ToolItem name="Trello" description="Kanban-style project management tool." />
        </Section>
      </div>
    );
  }
  