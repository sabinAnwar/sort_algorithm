# Sorting Algorithm Visualizer

An interactive web application for visualizing and understanding popular sorting algorithms. This application provides real-time animations, step-by-step code execution, and complexity analysis for various sorting algorithms.

## Features

- 🎯 **Multiple Sorting Algorithms**: Bubble Sort, Insertion Sort, Selection Sort, and Merge Sort
- 📊 **Visual Representations**: 
  - Bar chart view with animated transitions
  - Box view with numerical values
- 🎮 **Interactive Controls**: 
  - Play/Pause animations
  - Step forward/backward through execution
  - Adjustable speed (1x, 2x, 3x)
  - Reset and restart functionality
- 💻 **Code Highlighting**: Real-time highlighting of the currently executing code line
- 📈 **Complexity Analysis**: Display of time and space complexity for each algorithm
- 🔢 **Custom Input**: Enter your own number sequences or generate random arrays
- ⚡ **Modern Tech Stack**: Built with React Router, TypeScript, Vite, and Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.x or higher (recommended: v20.x LTS)
- **npm**: Version 7.x or higher (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sabinAnwar/sort_algorithm.git
   cd sort_algorithm
   ```

2. **Navigate to the sorting directory**:
   ```bash
   cd sorting
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## How to Run

### Development Mode

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

   The production server will run on `http://localhost:3000`

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Available Scripts

From the `sorting` directory:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR on port 5173 |
| `npm run build` | Create production build |
| `npm run start` | Start production server on port 3000 |
| `npm run typecheck` | Run TypeScript type checking |

## Docker Deployment

### Building the Docker Image

```bash
cd sorting
docker build -t sorting-visualizer .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 sorting-visualizer
```

The application will be accessible at `http://localhost:3000`

### Docker Deployment Platforms

The containerized application can be deployed to:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel (with vercel.json configuration included)

## Project Structure

```
sort_algorithm/
├── sorting/                    # Main application directory
│   ├── app/                    # Application source code
│   │   ├── features/           # Feature modules
│   │   │   ├── SortVisualizer.tsx  # Main visualization component
│   │   │   ├── algorithms.ts       # Sorting algorithm implementations
│   │   │   └── index.ts
│   │   ├── routes/             # React Router routes
│   │   │   ├── index.tsx       # Home page
│   │   │   ├── bubble.tsx      # Bubble sort page
│   │   │   ├── insertion.tsx   # Insertion sort page
│   │   │   ├── selection.tsx   # Selection sort page
│   │   │   └── merge.tsx       # Merge sort page
│   │   ├── components/         # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   └── root.tsx            # Root component
│   ├── public/                 # Static assets
│   ├── build/                  # Production build output (generated)
│   ├── package.json            # Dependencies and scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite configuration
│   ├── Dockerfile              # Docker configuration
│   └── README.md               # Detailed project documentation
└── README.md                   # This file
```

## Technology Stack

- **Frontend Framework**: React 19.x with React Router 7.x
- **Language**: TypeScript 5.x
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Server**: React Router Node Server

## How to Use the Application

1. **Select an Algorithm**: Navigate to one of the sorting algorithm pages (Bubble, Insertion, Selection, or Merge Sort)
2. **Input Data**: 
   - Enter your own comma-separated numbers, or
   - Click "Generate Random Array" to create a random dataset (2-10 elements)
3. **Visualize**: Click "Start" to begin the visualization
4. **Control Playback**:
   - Use Play/Pause to control the animation
   - Step forward/backward to see individual steps
   - Adjust speed using the speed selector
   - Reset to start over with the same data
5. **Learn**: Watch the code highlighting and read the complexity information to understand how each algorithm works

## Features in Detail

### Implemented Sorting Algorithms

- **Bubble Sort**: Classic comparison-based algorithm with O(n²) complexity
- **Insertion Sort**: Builds sorted array one item at a time
- **Selection Sort**: Repeatedly finds minimum element
- **Merge Sort**: Divide-and-conquer recursive algorithm with O(n log n) complexity

### Visualization Options

- **Chart View**: Animated bar chart where heights represent values, colors indicate status (active, sorted)
- **Box View**: Alternative view with numbers displayed in boxes

### Input Validation

- Validates user input for invalid entries
- Checks for negative numbers
- Limits array size to prevent performance issues

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational purposes.

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/sabinAnwar/sort_algorithm).