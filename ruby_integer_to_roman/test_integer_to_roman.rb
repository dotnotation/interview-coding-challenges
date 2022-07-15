require './integer_to_roman.rb'

describe IntegerToRoman, '#convert' do

  it 'converts 1' do
    1.to_roman.should eq 'I'
  end

  it 'converts 2' do
    2.to_roman.should eq 'II'
  end

  it 'converts 3' do
    3.to_roman.should eq 'III'
  end

  it 'converts 4' do
    4.to_roman.should eq 'IV'
  end

  it 'converts 5' do
    5.to_roman.should eq 'V'
  end

  it 'converts 6' do
    6.to_roman.should eq 'VI'
  end

  it 'converts 9' do
    9.to_roman.should eq 'IX'
  end


  it 'converts 27' do
    27.to_roman.should eq 'XXVII'
  end

  it 'converts 48' do
    48.to_roman.should eq 'XLVIII'
  end

  it 'converts 59' do
    59.to_roman.should eq 'LIX'
  end

  it 'converts 93' do
    93.to_roman.should eq 'XCIII'
  end

  it 'converts 141' do
    141.to_roman.should eq 'CXLI'
  end

  it 'converts 163' do
    163.to_roman.should eq 'CLXIII'
  end

  it 'converts 402' do
    402.to_roman.should eq 'CDII'
  end

  it 'converts 575' do
    575.to_roman.should eq 'DLXXV'
  end

  it 'converts 911' do
    911.to_roman.should eq 'CMXI'
  end

  it 'converts 1001' do
    1001.to_roman.should eq 'MI'
  end

  it 'converts 1024' do
    1024.to_roman.should eq 'MXXIV'
  end

  it 'converts 1464' do
    1464.to_roman.should eq 'MCDLXIV'
  end

  it 'converts 1989' do
    1989.to_roman.should eq 'MCMLXXXIX'
  end

  it 'converts 1998' do
    1998.to_roman.should eq 'MCMXCVIII'
  end

  it 'converts 3000' do
    3000.to_roman.should eq 'MMM'
  end

  it 'converts 4999' do
    4999.to_roman.should eq 'MMMMCMXCIX'
  end
end