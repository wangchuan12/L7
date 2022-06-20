import { storiesOf } from '@storybook/react';
import * as React from 'react';

import RasterTile from './components/RasterTile';
import OsmRasterTile from './components/OsmRasterTile';

import RasterArrayBuffer from './components/RasterArrayBuffer';
import RasterArrayBuffer2 from './components/RasterArrayBuffer2';
import RasterArrayBufferMask from './components/RasterArrayBufferMask';

import TiffRasterTile from './components/TiffRasterTile';
import VectorOffsetPolygonTile from './components/VectorOffsetPolygonTile';
import VectorOffsetLineTile from './components/VectorOffsetLineTile';
import VectorOffssetPointTile from './components/VectorOffssetPointTile';
import VectorPointTile from './components/VectorPointTile';
import VectorPointTextTile from './components/VectorPointTextTile';
import VectorPolygonTile from './components/VectorPolygonTile';
import VectorLineTile from './components/VectorLineTile';

import VectorProvince from './components/VectorProvince';
import VectorProvinceAllTile from './components/VectorProvinceAllTile';

import Germany from './components/germany';
import Billboard from './components/billboard';


storiesOf('瓦片', module)
  .add('RasterTile', () => <RasterTile />)
  .add('OsmRasterTile', () => <OsmRasterTile />)

  .add('RasterArrayBuffer', () => <RasterArrayBuffer />)
  .add('RasterArrayBuffer2', () => <RasterArrayBuffer2 />)
  .add('RasterArrayBufferMask', () => <RasterArrayBufferMask />)

  .add('TiffRasterTile', () => <TiffRasterTile />)
  .add('VectorOffsetPolygonTile', () => <VectorOffsetPolygonTile />)
  .add('VectorOffsetLineTile', () => <VectorOffsetLineTile />)
  .add('VectorOffssetPointTile', () => <VectorOffssetPointTile />)
  .add('VectorPointTile', () => <VectorPointTile />)
  .add('VectorPointTextTile', () => <VectorPointTextTile />)
  .add('VectorPolygonTile', () => <VectorPolygonTile />)
  .add('VectorLineTile', () => <VectorLineTile />)

  .add('VectorProvince', () => <VectorProvince />)
  .add('VectorProvinceAllTile', () => <VectorProvinceAllTile />)

  .add('Germany', () => <Germany />)
  .add('Billboard', () => <Billboard />)
