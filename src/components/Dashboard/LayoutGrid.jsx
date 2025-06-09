import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { usePersonalizationContext } from '../../context/PersonalizationContext';
import WidgetFactory from './WidgetFactory';
import ErrorBoundary from '../ErrorBoundary';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function LayoutGrid() {
  const { getLayout } = usePersonalizationContext();
  const layoutData = getLayout();
  const layouts = layoutData?.layout || { lg: [] };
  const widgets = layoutData?.widgets || [];

  return (
    <ResponsiveGridLayout
      className="dashboard-grid"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={40}
      isDraggable
      isResizable
      draggableHandle=".drag-handle"
    >
      {widgets.map(widget => (
        <div key={widget.i}>
          <ErrorBoundary>
            <div className="drag-handle" />
            <WidgetFactory type={widget.type} symbol={widget.symbol} />
          </ErrorBoundary>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
