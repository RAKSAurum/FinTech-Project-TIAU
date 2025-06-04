import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import WidgetFactory from './WidgetFactory';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function LayoutGrid({ layout, widgets }) {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={40}
      draggableHandle=".widget-drag-handle"
    >
      {widgets.map(widget => (
        <div key={widget.i} data-grid={widget}>
          <WidgetFactory type={widget.type} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
