import React from 'react';

const skills = {
  development: [
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      ),
      description: 'Static typing for JavaScript',
      className: 'animate-ts'
    },
    {
      name: 'React.js',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      description: 'UI component library',
      className: 'animate-react'
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M8.286 10.578L12.002 2l3.716 8.578-3.716 2.148-3.716-2.148zm-4.266 2.34L2 10.578l3.716-2.148 2.02 4.688-3.716-.199zm16.01-2.34l-2.02 2.34-3.716.199 2.02-4.688L20.03 10.578zM12.002 22l-3.716-7.422 3.716-2.148 3.716 2.148L12.002 22z" />
        </svg>
      ),
      description: 'Next generation frontend tooling',
      className: 'animate-vite'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
      description: 'Dynamic programming language',
      className: 'animate-js'
    }
  ],
  creative: [
    {
      name: 'Affinity Designer',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M12 0L2.25 4.5v15L12 24l9.75-4.5v-15L12 0zm7.5 17.85L12 21.3l-7.5-3.45V6.15L12 2.7l7.5 3.45v11.7z"/>
          <path d="M12 4.5L6 7.5v9l6 3 6-3v-9l-6-3zm4.5 10.35L12 16.8l-4.5-2.25V8.85L12 6.6l4.5 2.25v6.3z"/>
        </svg>
      ),
      description: 'Vector graphics & UI design',
      className: 'animate-affinity'
    },
    {
      name: 'Affinity Photo',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
          <path d="M12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm0 13.5c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"/>
        </svg>
      ),
      description: 'Professional photo editing',
      className: 'animate-photo'
    },
    {
      name: 'DaVinci Resolve',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm8.25 16.5L12 21.3l-8.25-4.8V7.5L12 2.7l8.25 4.8v9z"/>
          <path d="M12 4.5L5.25 8.25v7.5L12 19.5l6.75-3.75v-7.5L12 4.5zm4.5 9.75L12 16.8l-4.5-2.55V9.75L12 7.2l4.5 2.55v4.5z"/>
        </svg>
      ),
      description: 'Video editing & color grading',
      className: 'animate-davinci'
    },
    {
      name: 'Final Cut Pro',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/>
          <path d="M15.75 12l-6-3.75v7.5l6-3.75z"/>
        </svg>
      ),
      description: 'Professional video production',
      className: 'animate-finalcut'
    }
  ]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">
          Technical <span className="text-primary">Expertise</span>
        </h2>

        <div className="space-y-16">
          {/* Development Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Development Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.development.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-muted/50 backdrop-blur-sm rounded-xl 
                           hover:bg-muted/70 transition-all duration-300"
                >
                  <div className={`mb-4 text-primary ${skill.className}`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative & Marketing Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Creative & Marketing Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.creative.map((skill, index) => (
                <div
                  key={index}
                  className="group p-6 bg-muted/50 backdrop-blur-sm rounded-xl 
                           hover:bg-muted/70 transition-all duration-300"
                >
                  <div className={`mb-4 text-primary ${skill.className}`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};